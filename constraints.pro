% Enforces that all workspaces depend on other workspaces using `workspace:^`
gen_enforced_dependency(WorkspaceCwd, DependencyIdent, 'workspace:^', DependencyType) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, DependencyRange, DependencyType),
  % Only consider dependency ranges that start with 'workspace:'
  atom_concat('workspace:', _, DependencyRange),
  % Only consider 'dependencies' and 'devDependencies'
  (DependencyType = 'dependencies'; DependencyType = 'devDependencies').

% Enforces the license in all public workspaces while removing it from private workspaces
gen_enforced_field(WorkspaceCwd, 'license', 'MIT') :-
  \+ workspace_field(WorkspaceCwd, 'private', true).
gen_enforced_field(WorkspaceCwd, 'license', null) :-
  workspace_field(WorkspaceCwd, 'private', true).

% Enforces the repository field for all public workspaces while removing it from private workspaces
gen_enforced_field(WorkspaceCwd, 'repository.type', 'git') :-
  \+ workspace_field(WorkspaceCwd, 'private', true).
gen_enforced_field(WorkspaceCwd, 'repository.url', 'https://github.com/singlestone/sugar.git') :-
  \+ workspace_field(WorkspaceCwd, 'private', true).
gen_enforced_field(WorkspaceCwd, 'repository.directory', WorkspaceCwd) :-
  \+ workspace_field(WorkspaceCwd, 'private', true).
gen_enforced_field(WorkspaceCwd, 'repository', null) :-
  workspace_field(WorkspaceCwd, 'private', true).

% Enforces 'publishConfig.access' is set to public for public workspaces while removing it from private workspaces
gen_enforced_field(WorkspaceCwd, 'publishConfig.access', 'public') :-
  \+ workspace_field(WorkspaceCwd, 'private', true).
gen_enforced_field(WorkspaceCwd, 'publishConfig.access', null) :-
  workspace_field(WorkspaceCwd, 'private', true).

% Enforces 'publishConfig.registry' is set to GitHub packages for public workspaces while removing it from private workspaces
gen_enforced_field(WorkspaceCwd, 'publishConfig.registry', 'https://registry.npmjs.org') :-
  \+ workspace_field(WorkspaceCwd, 'private', true).
gen_enforced_field(WorkspaceCwd, 'publishConfig.access', null) :-
  workspace_field(WorkspaceCwd, 'private', true).

% Enforces the engines.node field
gen_enforced_field(WorkspaceCwd, 'engines.node', '^12 || ^14 || >=16') :-
  \+ workspace_field(WorkspaceCwd, 'private', true),
  % Get the workspace name
  workspace_ident(WorkspaceCwd, WorkspaceIdent).

% Removes the 'engines.node' field from private workspaces
gen_enforced_field(WorkspaceCwd, 'engines.node', null) :-
  workspace_field(WorkspaceCwd, 'private', true).

% Enforces the author field to be consistent
gen_enforced_field(WorkspaceCwd, 'author', 'SingleStone Consulting (https://www.singlestoneconsulting.com/)') :-
  \+ workspace_field(WorkspaceCwd, 'private', true).
gen_enforced_field(WorkspaceCwd, 'author', null) :-
  workspace_field(WorkspaceCwd, 'private', true).

% Enforces the main and types field to start with ./
gen_enforced_field(WorkspaceCwd, FieldName, ExpectedValue) :-
  % Fields the rule applies to
  member(FieldName, ['main', 'types']),
  % Get current value
  workspace_field(WorkspaceCwd, FieldName, CurrentValue),
  % Must not start with ./ already
  \+ atom_concat('./', _, CurrentValue),
  % Store './' + CurrentValue in ExpectedValue
  atom_concat('./', CurrentValue, ExpectedValue).

% Enforces that a dependency doesn't appear in both `dependencies` and `devDependencies`
gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, 'devDependencies') :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, 'devDependencies'),
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, 'dependencies').

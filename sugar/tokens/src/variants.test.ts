import { describe, expect, it } from "vitest";

import { getSugarVariant, isSugarVariant } from "./variants";

describe("isSugarVariant", () => {
  it("returns true for a valid variant", () => {
    expect(isSugarVariant("solid")).toBeTruthy();
  });

  it("returns false for an invalid variant", () => {
    expect(isSugarVariant("test")).toBeFalsy();
  });

  it("returns false for a number", () => {
    expect(isSugarVariant(10)).toBeFalsy();
  });

  it("returns false for undefined", () => {
    expect(isSugarVariant(undefined)).toBeFalsy();
  });

  it("returns false for null", () => {
    expect(isSugarVariant(null)).toBeFalsy();
  });
});

describe("getSugarVariant", () => {
  describe("no fallback provided", () => {
    it("returns provided value for a valid variant", () => {
      expect(getSugarVariant("outline")).toEqual("outline");
    });

    it('returns "solid" for an invalid variant', () => {
      expect(getSugarVariant("test")).toEqual("solid");
    });

    it('returns "solid" for a number', () => {
      expect(getSugarVariant(10)).toEqual("solid");
    });

    it('returns "solid" for undefined', () => {
      expect(getSugarVariant(undefined)).toEqual("solid");
    });

    it('returns "solid" for null', () => {
      expect(getSugarVariant(null)).toEqual("solid");
    });
  });

  describe("fallback provided", () => {
    it("returns provided value for a valid variant", () => {
      expect(getSugarVariant("solid", "outline")).toEqual("solid");
    });

    it("returns fallback value for an invalid variant", () => {
      expect(getSugarVariant("test", "outline")).toEqual("outline");
    });

    it("returns fallback value for a number", () => {
      expect(getSugarVariant(10, "outline")).toEqual("outline");
    });

    it("returns fallback value for undefined", () => {
      expect(getSugarVariant(undefined, "outline")).toEqual("outline");
    });

    it("returns fallback value for null", () => {
      expect(getSugarVariant(null, "outline")).toEqual("outline");
    });
  });
});

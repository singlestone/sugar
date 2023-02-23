import { describe, expect, it } from "vitest";

import { getSugarColor, isSugarColor } from "./colors";

describe("isSugarColor", () => {
  it("returns true for a valid color", () => {
    expect(isSugarColor("accent")).toBeTruthy();
  });

  it("returns false for an invalid color", () => {
    expect(isSugarColor("test")).toBeFalsy();
  });

  it("returns false for a number", () => {
    expect(isSugarColor(10)).toBeFalsy();
  });

  it("returns false for undefined", () => {
    expect(isSugarColor(undefined)).toBeFalsy();
  });

  it("returns false for null", () => {
    expect(isSugarColor(null)).toBeFalsy();
  });
});

describe("getSugarColor", () => {
  describe("no fallback provided", () => {
    it("returns provided value for a valid color", () => {
      expect(getSugarColor("destructive")).toEqual("destructive");
    });

    it('returns "accent" for an invalid color', () => {
      expect(getSugarColor("test")).toEqual("accent");
    });

    it('returns "accent" for a number', () => {
      expect(getSugarColor(10)).toEqual("accent");
    });

    it('returns "accent" for undefined', () => {
      expect(getSugarColor(undefined)).toEqual("accent");
    });

    it('returns "accent" for null', () => {
      expect(getSugarColor(null)).toEqual("accent");
    });
  });

  describe("fallback provided", () => {
    it("returns provided value for a valid color", () => {
      expect(getSugarColor("accent", "destructive")).toEqual("accent");
    });

    it("returns fallback value for an invalid color", () => {
      expect(getSugarColor("test", "destructive")).toEqual("destructive");
    });

    it("returns fallback value for a number", () => {
      expect(getSugarColor(10, "destructive")).toEqual("destructive");
    });

    it("returns fallback value for undefined", () => {
      expect(getSugarColor(undefined, "destructive")).toEqual("destructive");
    });

    it("returns fallback value for null", () => {
      expect(getSugarColor(null, "destructive")).toEqual("destructive");
    });
  });
});

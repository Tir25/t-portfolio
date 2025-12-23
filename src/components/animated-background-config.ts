export type Section = "hero" | "about" | "skills" | "projects" | "contact";

export const STATES = {
  hero: {
    desktop: {
      scale: { x: 0.32, y: 0.32, z: 0.32 },
      position: { x: 380, y: -160, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.22, y: 0.22, z: 0.22 },
      position: { x: 0, y: -100, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  about: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 12,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 12,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.24, y: 0.24, z: 0.24 },
      position: { x: 0, y: -10, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
    mobile: {
      scale: { x: 0.26, y: 0.26, z: 0.26 },
      position: { x: 0, y: 40, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 500, y: -250, z: 0 },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.24, y: 0.24, z: 0.24 },
      position: { x: 0, y: 60, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
  },
};

export const getKeyboardState = ({
  section,
  isMobile,
}: {
  section: Section;
  isMobile: boolean;
}) => {
  const baseTransform = STATES[section][isMobile ? "mobile" : "desktop"];
  // On high-DPI screens we were shrinking the keyboard using devicePixelRatio,
  // which made it too small and hard to tap on mobile.
  //
  // To keep the keyboard large and more clickable on phones, we:
  // - return the mobile scale as-is (no DPR downscaling)
  // - only apply DPR-based scaling on desktop where precision is higher
  if (typeof window === "undefined") {
    return baseTransform;
  }

  if (isMobile) {
    return baseTransform;
  }

  const scaleOffset = +(window.devicePixelRatio - 0.4).toFixed(1) || 1;

  return {
    ...baseTransform,
    scale: {
      x: Math.abs(baseTransform.scale.x / scaleOffset),
      y: Math.abs(baseTransform.scale.y / scaleOffset),
      z: Math.abs(baseTransform.scale.z / scaleOffset),
    },
  };
};

import React, { useCallback } from 'react';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 0.3, // Slower motion
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 50, // Lower density for performance
                    },
                    opacity: {
                        value: 0.15, // More subtle
                        random: true,
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0.05
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.5, max: 1.5 }, // Smaller particles
                        random: true
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default BackgroundParticles;

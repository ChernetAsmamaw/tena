import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { FaHeartbeat } from "react-icons/fa";

const useIntersectionObserver = <T extends HTMLElement>(
  options = {},
): [React.RefObject<T>, boolean] => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<T>(null) as React.RefObject<T>;

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

// Healthcare 3D Cross Animation - Blue Medical Cross
const HealthcareSymbol = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Cleanup existing children to prevent duplicates (Strict Mode fix)
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    const width = 500;
    const height = 500;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 4;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Cross Group
    const crossGroup = new THREE.Group();
    scene.add(crossGroup);

    // Rounded Box Geometry Logic (simulated with standard boxes for simplicity)
    // Vertical Bar
    const verticalGeo = new THREE.BoxGeometry(0.8, 2.6, 0.8);
    // Horizontal Bar
    const horizontalGeo = new THREE.BoxGeometry(2.6, 0.8, 0.8);

    // Material - Glossy modern blue
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x0ea5e9, // Sky Blue 500
      roughness: 0.2,
      metalness: 0.1,
      reflectivity: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: 0x0369a1, // Darker blue glow
      emissiveIntensity: 0.2,
    });

    const verticalBar = new THREE.Mesh(verticalGeo, material);
    const horizontalBar = new THREE.Mesh(horizontalGeo, material);

    crossGroup.add(verticalBar);
    crossGroup.add(horizontalBar);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const pointLight1 = new THREE.PointLight(0xffffff, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 100);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Floating Particles Ring
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 60;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.2;
      const theta = Math.random() * Math.PI * 2;
      // Distribute on a ring/band
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x7dd3fc, // Sky 300
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);

      // Rotate Cross
      crossGroup.rotation.y += 0.008;
      crossGroup.rotation.x = Math.sin(Date.now() * 0.001) * 0.3;
      crossGroup.rotation.z = Math.cos(Date.now() * 0.0015) * 0.1;

      // Rotate Particles separately
      particles.rotation.y -= 0.002;
      particles.rotation.x += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
      if (
        mountRef.current &&
        renderer.domElement.parentNode === mountRef.current
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full flex items-center justify-center"
    />
  );
};

const Hero = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white flex items-center pt-24 pb-20 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50"></div>

      {/* Floating Healthcare Elements */}
      <div className="absolute top-32 right-20 w-32 h-32 bg-sky-100 rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl animate-pulse opacity-40"></div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text Content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-display font-semibold mb-6 animate-slide-up">
            <FaHeartbeat /> Advanced Medical Access
          </span>

          <h1 className="text-hero text-dark mb-6 font-display animate-slide-up delay-100">
            Quality Healthcare at Your Fingertips
          </h1>

          <p className="text-lg text-gray-600 mb-8 font-body leading-relaxed animate-slide-up delay-200">
            Tena AI brings AI-powered medical assistance to rural communities
            across Africa. Get instant answers to health questions, understand
            symptom severity, and connect with healthcare professionals when
            needed.
          </p>

          {/* Key Features List */}
          <ul className="space-y-4 mb-10 animate-slide-up delay-300">
            <li className="flex items-center space-x-3 text-gray-700">
              <span className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span>24/7 AI Medical Assistant</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700">
              <span className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span>Symptom Severity Ranking</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700">
              <span className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span>Professional Doctor Oversight</span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
            <button
              onClick={() => navigate("/coming-soon")}
              className="btn-blue px-8 py-4 rounded-full font-display font-semibold text-lg"
            >
              Get Started Free
            </button>
            <button className="btn-blue-outline px-8 py-4 rounded-full font-display font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - 3D Symbol */}
        <div
          className={`hidden md:block h-96 animate-fade-in transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <HealthcareSymbol />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import * as THREE from 'three';

export default function HomePage() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chamber' | 'microscopic' | 'full-unit'>('chamber');

  const mountRef = useRef<HTMLDivElement>(null);
  const exhaustMountRef = useRef<HTMLDivElement>(null);

  // Custom Cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Three.js 1: Bio-Chamber Model Simulation
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x10b981, 3, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const chamberGroup = new THREE.Group();

    const outerGeo = new THREE.CylinderGeometry(1.6, 1.6, 3.2, 32, 1, true);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.6,
      side: THREE.DoubleSide
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    chamberGroup.add(outerMesh);

    const algaeParticlesCount = 350;
    const algaeGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const algaeMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.2,
      emissive: 0x047857,
      emissiveIntensity: 0.4
    });

    const algaeParticles: { mesh: THREE.Mesh; angle: number; radius: number; speed: number; yPos: number }[] = [];

    for (let i = 0; i < algaeParticlesCount; i++) {
      const mesh = new THREE.Mesh(algaeGeo, algaeMat);
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 1.2;
      const yPos = (Math.random() - 0.5) * 2.8;
      const speed = Math.random() * 0.02 + 0.01;

      mesh.position.set(Math.cos(angle) * radius, yPos, Math.sin(angle) * radius);
      chamberGroup.add(mesh);
      algaeParticles.push({ mesh, angle, radius, speed, yPos });
    }

    const coreGeo = new THREE.CylinderGeometry(0.4, 0.4, 3, 16);
    const coreMat = new THREE.MeshStandardMaterial({ color: 0x065f46, roughness: 0.4, metalness: 0.8 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    chamberGroup.add(coreMesh);

    scene.add(chamberGroup);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      chamberGroup.rotation.y = elapsedTime * 0.4;
      chamberGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15;

      algaeParticles.forEach((p) => {
        p.angle += p.speed * 0.5;
        p.mesh.position.x = Math.cos(p.angle) * p.radius;
        p.mesh.position.z = Math.sin(p.angle) * p.radius;
        p.mesh.position.y = p.yPos + Math.sin(elapsedTime * 2 + p.radius) * 0.1;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activeTab]);

  // Three.js 2: Car Exhaust & Fitted ALGAIR Prototype Simulation
  useEffect(() => {
    const container = exhaustMountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(4, 2, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x34d399, 2);
    dirLight.position.set(5, 10, 5);
    scene.add(dirLight);

    const assemblyGroup = new THREE.Group();

    const bumperGeo = new THREE.BoxGeometry(4.5, 1.2, 0.4);
    const bumperMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6 });
    const bumperMesh = new THREE.Mesh(bumperGeo, bumperMat);
    bumperMesh.position.set(0, -0.8, -1);
    assemblyGroup.add(bumperMesh);

    const pipeGeo = new THREE.CylinderGeometry(0.35, 0.35, 2, 32);
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });
    const pipeMesh = new THREE.Mesh(pipeGeo, pipeMat);
    pipeMesh.rotation.z = Math.PI / 2;
    pipeMesh.position.set(-0.5, 0, 0);
    assemblyGroup.add(pipeMesh);

    const unitGeo = new THREE.CylinderGeometry(0.8, 0.8, 1.8, 32);
    const unitMat = new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.5,
      roughness: 0.1,
      transmission: 0.5
    });
    const unitMesh = new THREE.Mesh(unitGeo, unitMat);
    unitMesh.position.set(1, 0, 0);
    assemblyGroup.add(unitMesh);

    const coreGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const coreMat = new THREE.MeshStandardMaterial({ color: 0x059669, emissive: 0x047857, emissiveIntensity: 0.8 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(1, 0, 0);
    assemblyGroup.add(coreMesh);

    const particleCount = 40;
    const particleGeo = new THREE.SphereGeometry(0.05, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8 });
    const exhaustParticles: { mesh: THREE.Mesh; xPos: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const mesh = new THREE.Mesh(particleGeo, particleMat);
      const xPos = -2 + Math.random() * 4;
      mesh.position.set(xPos, (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2);
      assemblyGroup.add(mesh);
      exhaustParticles.push({ mesh, xPos });
    }

    scene.add(assemblyGroup);

    let animationId: number;
    const animateExhaust = () => {
      animationId = requestAnimationFrame(animateExhaust);

      assemblyGroup.rotation.y += 0.005;

      exhaustParticles.forEach((p) => {
        p.xPos += 0.03;
        if (p.xPos > 2.5) p.xPos = -2;
        p.mesh.position.x = p.xPos;
        if (p.xPos > 0.5 && p.xPos < 1.5) {
          (p.mesh.material as THREE.MeshBasicMaterial).color.set(0x34d399);
        } else {
          (p.mesh.material as THREE.MeshBasicMaterial).color.set(0x94a3b8);
        }
      });

      renderer.render(scene, camera);
    };

    animateExhaust();

    const handleResize2 = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize2);

    return () => {
      window.removeEventListener('resize', handleResize2);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 relative overflow-x-hidden md:[cursor:none]">

      {/* Custom Glow Cursor */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out hidden md:block ${cursorHovered ? 'w-14 h-14 bg-emerald-400/25 border border-emerald-400/60 scale-110' : 'w-7 h-7 bg-emerald-500/50 border border-emerald-300 scale-100'
          }`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-emerald-200 hidden md:block shadow-sm shadow-emerald-400"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/85 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#home"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                <div className="w-4 h-4 rounded-full bg-emerald-400/40 animate-ping absolute"></div>
                <svg className="w-5 h-5 text-emerald-400 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-widest text-white flex items-center">
                ALG<span className="text-emerald-400">AIR</span>
              </span>
              <span className="text-[10px] tracking-widest text-emerald-500/80 uppercase font-mono">Bio-Filtration</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
            {[
              { name: 'ALGAIR', href: '#home' },
              { name: 'Problem', href: '#problem' },
              { name: 'Solution', href: '#solution' },
              { name: '3D Showcase', href: '#model-showcase' },
              { name: 'Exhaust Mount', href: '#exhaust-mount' },
              { name: 'About Us', href: '#about-us' },
              { name: 'Technology', href: '#technology' },
              { name: 'Future', href: '#future' },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="px-3.5 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-emerald-950/50 hover:border-emerald-800/50 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-6 py-4 space-y-3">
            {['ALGAIR', 'Problem', 'Solution', '3D Showcase', 'Exhaust Mount', 'About Us', 'Technology', 'Future'].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-slate-300 hover:text-emerald-400 py-1"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 1. Home */}
      <section id="home" className="py-24 md:py-36 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-400 text-xs font-semibold tracking-wide uppercase shadow-inner shadow-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Algae-Powered Exhaust Filtration System</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none bg-gradient-to-r from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent">
              ALGAIR
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              ALGAIR is a compact algae-based exhaust filtration concept designed to reduce the environmental impact of vehicle emissions by combining filtration technology with the natural capabilities of algae.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#model-showcase"
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 flex items-center space-x-2 group"
              >
                <span>Launch 3D Bio-Chamber</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800/80 p-6 aspect-video flex flex-col items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
              <div className="absolute top-4 left-4 z-10 bg-slate-950/80 px-3 py-1 rounded-lg border border-slate-800 text-[10px] font-mono text-emerald-400">
                Live Simulation Preview
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 animate-bounce">
                    🌿
                  </div>
                  <p className="text-xs font-semibold text-emerald-300">Sedan & SUV Tailpipe Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Problem */}
      <section id="problem" className="py-24 bg-slate-900/40 border-t border-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">Diagnostic Assessment</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">The Problem We're Solving</h2>
            <p className="text-slate-400">Modern vehicular transit presents critical environmental challenges requiring innovative engineering.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', desc: 'Vehicles release harmful gases and particulate pollutants continuously.' },
              { num: '02', desc: 'Increasing vehicle usage contributes intensely to urban air pollution.' },
              { num: '03', desc: 'Conventional exhaust systems mainly control emissions rather than utilizing biological processes.' },
              { num: '04', desc: 'There is a pressing need for innovative, compact, and sustainable emission treatment approaches.' }
            ].map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                <div className="text-emerald-400 font-mono font-bold text-xl mb-4">{item.num}</div>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Solution */}
      <section id="solution" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Biological Integration</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Introducing ALGAIR</h2>
            <p className="text-slate-300 leading-relaxed text-base">
              ALGAIR integrates an algae-based biological chamber with an exhaust treatment system. The concept directs treated exhaust gases through the system, where filtration and algae-based processes work together to help reduce the environmental impact of emissions.
            </p>
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-300 font-mono">
              💡 Example Integration: Designed to mount modularly onto tailpipe assemblies of combustion or hybrid vehicles.
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-8 aspect-video flex items-center justify-center relative shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/30 to-transparent"></div>
            <p className="text-sm font-medium text-emerald-400/90 z-10">[ Modular Tailpipe Assembly Concept ]</p>
          </div>
        </div>
      </section>

      {/* 3D Model Showcase using Three.js */}
      <section id="model-showcase" className="py-24 bg-slate-900/60 border-t border-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">Interactive 3D Simulation</div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">ALGAIR 3D Bio-Chamber Model</h2>
              <p className="text-slate-400 mt-2">Inspect real-time Three.js rendering of the suspended algae matrix and core chamber.</p>
            </div>

            <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800">
              {[
                { id: 'chamber', label: 'Reaction Chamber' },
                { id: 'microscopic', label: 'Algae Matrix' },
                { id: 'full-unit', label: 'Exhaust Assembly' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === tab.id ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 rounded-3xl bg-slate-950 border border-slate-800/80 p-2 relative overflow-hidden shadow-2xl min-h-[420px]">
              <div className="absolute top-4 left-4 z-10 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-emerald-400 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Three.js Real-time 3D Engine Active</span>
              </div>
              <div ref={mountRef} className="w-full h-[400px] rounded-2xl block"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider mb-2">Model Specifications</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Chamber Volume</span>
                    <span className="font-mono font-medium text-white">4.2 Liters</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Culture Medium</span>
                    <span className="font-mono font-medium text-white">Chlorella Suspended Gel</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Sensor Array</span>
                    <span className="font-mono font-medium text-white">CO₂ / O₂ / Temp Telemetry</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Housing Material</span>
                    <span className="font-mono font-medium text-white">Reinforced Titanium Alloy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three.js Car Exhaust Fitted Prototype */}
      <section id="exhaust-mount" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">Automotive Integration</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Prototype Fitted to Vehicle Exhaust</h2>
          <p className="text-slate-400 mt-2">Interactive 3D simulation showing gas flow conversion through the mounted ALGAIR unit.</p>
        </div>

        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-3 relative overflow-hidden shadow-2xl">
          <div className="absolute top-4 left-4 z-10 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-emerald-400 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Tailpipe Simulation Active</span>
          </div>
          <div ref={exhaustMountRef} className="w-full h-[450px] rounded-2xl block"></div>
        </div>
      </section>

      {/* ABOUT US / FOUNDERS SECTION */}
      <section id="about-us" className="py-24 bg-slate-900/40 border-t border-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">The Minds Behind ALGAIR</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">About Us & Founders</h2>
            <p className="text-slate-400 mt-2">Pioneering intersectional green engineering and biological emission control systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <div
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 flex flex-col items-center text-center shadow-xl hover:border-emerald-500/50 transition-all group"
            >
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden mb-6 border-2 border-emerald-500/30 group-hover:border-emerald-400 transition-colors">
                <Image
                  src="/person2.jpeg"
                  alt="Ayush Aggarwal"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Ayush Aggarwal</h3>
              <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">Founder</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Passionate about merging sustainable biotech frameworks with scalable clean-tech products to counter modern metropolitan vehicular emissions.
              </p>
            </div>

            {/* Founder 2 */}
            <div
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 flex flex-col items-center text-center shadow-xl hover:border-emerald-500/50 transition-all group"
            >
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden mb-6 border-2 border-emerald-500/30 group-hover:border-emerald-400 transition-colors">
                <Image
                  src="/person1.jpeg"
                  alt="Krishvee"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Krishvee</h3>
              <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">Founder</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Focused on functional design and optimization of biological filtration loops for compact automobile exhaust integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">Process Architecture</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">How It Works</h2>
        </div>
        <div className="space-y-4">
          {[
            { step: 'Vehicle Exhaust', desc: 'Raw engine emissions enter the pipeline.' },
            { step: 'Inlet', desc: 'Gases are securely directed into the system intake.' },
            { step: 'Pre-Filtration', desc: 'Mechanical filters trap large particulates & soot.' },
            { step: 'Algae Chamber', desc: 'Gases interface with the specialized growth medium.' },
            { step: 'Biological Processing', desc: 'Natural processes interact with the filtered gas stream.' },
            { step: 'Outlet', desc: 'Cleaned, treated air emissions are expelled safely.' }
          ].map((item, idx, arr) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="w-full bg-slate-900/90 border border-slate-800 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:border-emerald-500/50 transition-all shadow-md"
              >
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-800/50">
                  Step 0{idx + 1}: {item.step}
                </span>
                <span className="text-slate-300 text-sm text-left sm:text-right max-w-md">{item.desc}</span>
              </div>
              {idx < arr.length - 1 && (
                <div className="h-6 w-0.5 bg-gradient-to-b from-emerald-500/60 to-slate-700/50 my-1 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Inside ALGAIR */}
      <section id="technology" className="py-24 bg-slate-900/40 border-t border-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">Internal Mechanics</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">Inside ALGAIR</h2>
            <p className="text-slate-400">Comprehensive hardware components engineered within the compact module.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 rounded-2xl bg-slate-900/80 border border-slate-800 p-8 min-h-[380px] flex items-center justify-center shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
              <p className="text-sm font-semibold text-emerald-400 tracking-wide z-10">[ Exploded Structural Diagram Component Map ]</p>
            </div>
            <div className="space-y-3">
              {['Exhaust inlet', 'Filtration section', 'Algae chamber', 'Air/gas circulation system', 'Sensors', 'Outlet', 'Algae growth medium'].map((component, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                  className="bg-slate-900/60 border border-slate-800/80 px-4 py-3.5 rounded-xl text-sm text-slate-300 flex items-center space-x-3 hover:border-emerald-500/40 transition-colors"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400"></span>
                  <span className="font-medium">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-24 bg-slate-900/40 border-t border-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">Core Advantages</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Algae-Based', desc: 'Uses a biological component inspired by natural photosynthesis.', icon: '🌱' },
              { title: 'Vehicle-Compatible Concept', desc: 'Designed around integration with vehicle exhaust systems.', icon: '🚗' },
              { title: 'Sustainable Approach', desc: 'Combines biological processing with filtration.', icon: '♻️' },
              { title: 'Compact Design', desc: 'Concept focuses on a compact form factor.', icon: '📦' },
              { title: 'Monitoring', desc: 'Can incorporate sensors to monitor operating conditions.', icon: '📊' },
              { title: 'Modular Concept', desc: 'Individual components can potentially be improved or replaced.', icon: '🔧' }
            ].map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 hover:bg-slate-900 transition-all group shadow-lg"
              >
                <div className="text-3xl mb-4 p-3 rounded-xl bg-slate-950 border border-slate-800 w-fit group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Potential */}
      <section id="future" className="py-24 bg-slate-900/40 border-t border-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">Roadmap</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">Future Potential</h2>
            <p className="text-slate-400">From Prototype to Cleaner Mobility</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {['Prototype', 'Testing', 'Vehicle Pilot', 'Fleet Applications', 'Future Automotive Integration'].map((stage, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl text-center flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-lg">
                <span className="text-xs font-mono text-emerald-400 mb-4 bg-emerald-950/60 py-1 px-2 rounded-lg border border-emerald-800/40">Stage 0{idx + 1}</span>
                <span className="text-sm font-semibold text-slate-200 leading-snug">{stage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-900 text-center text-xs text-slate-600 bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© ALGAIR Concept Website — Designed for visual clarity, science communication, and sustainable systems exploration.</p>
          <div className="flex items-center space-x-2 text-emerald-400/80 font-mono">
            <span>Founders: Ayush Aggarwal & Krishvee</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./components/Card";

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  icon: string;
  title: string;
  description: string;
}

const GpuClustersSection: React.FC = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  const cardData: CardData[] = [
    {
      icon: "/icon1.svg",
      title: "Top-Tier NVIDIA GPUs",
      description:
        "NVIDIA's latest GPUs, like GB200, H200, and H100, for peak AI performance, supporting both training and inference.",
    },
    {
      icon: "/icon2.svg",
      title: "Accelerated Software Stack",
      description:
        "The Together Kernel Collection includes custom CUDA kernels, reducing training times and costs with superior throughput.",
    },
    {
      icon: "/icon3.svg",
      title: "High-Speed Interconnects",
      description:
        "InfiniBand and NVLink ensure fast communication between GPUs, eliminating bottlenecks and enabling rapid processing of large datasets.",
    },
    {
      icon: "/icon4.svg",
      title: "Highly Scalable & Reliable",
      description:
        "Deploy 16 to 1000+ GPUs across global locations, with 99.9% uptime SLA.",
    },
    {
      icon: "/icon5.svg",
      title: "Expert AI Advisory Services",
      description:
        "Together AI’s expert team offers consulting for custom model development and scalable training best practices.",
    },
    {
      icon: "/icon6.svg",
      title: "Robust Management Tools",
      description:
        "Slurm and Kubernetes orchestrate dynamic AI workloads, optimizing training and inference seamlessly.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          end: "top 80%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-8 text-center max-w-6xl mx-auto mt-20"
    >
      <h2 className="mb-4 text-[40px] sm:text-[36px] md:text-[48px] lg:text-[66px] xl:text-[66px] leading-none font-light mb-10">
        <span className="text-blue-600">Forge</span> the{" "}
        <span className="text-blue-600">AI frontier.</span>
        Train on <span className="text-blue-600">expert-built</span> GPU
        clusters.
      </h2>
      <p className="text-[20px] sm:text-[24px] md:text-[20px] lg:text-[20px] xl:text-[26px] mb-8 leading-[1.2] font-normal">
        Built by AI researchers for AI innovators, Together GPU Clusters are
        powered by NVIDIA GB200, H200, and H100 GPUs, along with the Together
        Kernel
        <br />
        Collection — delivering up to 24% faster training operations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            className="gpu-card"
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          ref={buttonRef}
          className="bg-blue-500 text-white text-lg py-3 px-12 rounded-full flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <a href="https://www.together.ai/gpu-clusters" target="_blank">
            Together GPU Clusters
          </a>
        </button>
      </div>
    </section>
  );
};

export default GpuClustersSection;

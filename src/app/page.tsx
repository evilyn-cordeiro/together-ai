import Card from "./components/Card";

interface CardData {
  icon: string;
  title: string;
  description: string;
}

const GpuClustersSection: React.FC = () => {
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

  return (
    <section className="py-16 px-8 text-center max-w-6xl mx-auto">
      <h2
        className="text-gray-900 dark:text-white mb-4 font-semibold 
        text-[40px] sm:text-[40px] md:text-[48px] lg:text-[72px] xl:text-[72px]"
        style={{ lineHeight: "1", fontWeight: "400" }}
      >
        <span className="text-blue-600">Forge</span> the{" "}
        <span className="text-blue-600">AI frontier.</span>
        Train on <span className="text-blue-600">expert-built</span> GPU
        clusters.
      </h2>
      <p
        className="text-[24px] sm:text-[24px] md:text-[20px] lg:text-[26px] xl:text-[28px] text-gray-600 dark:text-gray-300 mb-8"
        style={{ lineHeight: "1.2", fontWeight: "400" }}
      >
        Built by AI researchers for AI innovators, Together GPU Clusters are
        powered by NVIDIA GB200, H200, and H100 GPUs, along with the Together
        Kernel Collection — delivering up to 24% faster training operations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-tg-blue text-white text-lg py-3 px-12 rounded-full flex items-center justify-center"
          style={{
            height: "48px",
            padding: ".9rem 3.2rem",
            lineHeight: "1.2",
            cursor: "pointer",
            background: "#0f6fff",
          }}
        >
          Together GPU Clusters
        </button>
      </div>
    </section>
  );
};

export default GpuClustersSection;

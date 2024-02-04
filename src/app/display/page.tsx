import React from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
const Display: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6 lg:p-8">
      {DATA.map((item) => (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{item.stall}.</CardTitle>
            <CardDescription className="uppercase">{item.project}</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              alt="Placeholder Image"
              className="w-full h-auto mb-4"
              height="150"
              src={item.image}
              style={{
                aspectRatio: "350/150",
                objectFit: "cover"
              }}
              width="350"
            />
            <div className="line-clamp-4">{item.description}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Display;

const DATA = [
  {
    stall: "1",
    project: "Smart Energy Meter",
    description:
      "Smart Energy Meter efficiently monitors and optimizes electricity consumption in real time. With advanced features like remote control and data analytics, it offers a sustainable solution for energy management, reducing costs and environmental impact.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "2",
    project: "Autonomous Drones for Agriculture",
    description:
      "Autonomous Drones for Agriculture leverage cutting-edge technology to enhance crop yield, optimize farming practices, and reduce environmental impact through precision agriculture.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "3",
    project: "Virtual Reality Classroom",
    description:
      "Virtual Reality Classroom transforms traditional learning environments by providing immersive educational experiences, improving engagement and understanding of complex subjects.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "4",
    project: "AI-Based Health Monitoring System",
    description:
      "AI-Based Health Monitoring System offers real-time health tracking and analysis, empowering individuals to manage their health proactively with predictive insights.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "5",
    project: "Blockchain for Secure Voting",
    description:
      "Blockchain for Secure Voting introduces a transparent, secure, and tamper-proof voting mechanism, enhancing the integrity and reliability of electoral processes.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "6",
    project: "Eco-Friendly Packaging Solutions",
    description:
      "Eco-Friendly Packaging Solutions focus on sustainable materials and designs to reduce waste and environmental impact, promoting a greener future.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "7",
    project: "Smart Home Automation System",
    description:
      "Smart Home Automation System creates intelligent living spaces that enhance comfort, efficiency, and security through seamless integration of technology.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "8",
    project: "Wearable Fitness Tracker",
    description:
      "Wearable Fitness Tracker encourages a healthy lifestyle by monitoring physical activity, offering insights, and setting personalized goals for users.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "9",
    project: "Augmented Reality for Education",
    description:
      "Augmented Reality for Education enriches learning by overlaying digital information onto the real world, making educational content more interactive and accessible.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "10",
    project: "Water Quality Monitoring System",
    description:
      "Water Quality Monitoring System ensures safe drinking water through continuous assessment and reporting of water quality, protecting public health and ecosystems.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "11",
    project: "Solar-Powered Charging Stations",
    description:
      "Solar-Powered Charging Stations provide green energy solutions for electronic devices, reducing reliance on non-renewable power sources and promoting sustainable energy use.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "12",
    project: "Automated Waste Sorting Machine",
    description:
      "Automated Waste Sorting Machine revolutionizes waste management by automatically separating recyclables, reducing landfill waste, and promoting recycling efforts.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "13",
    project: "IoT-Enabled Smart Parking",
    description:
      "IoT-Enabled Smart Parking simplifies urban parking through real-time information, reducing congestion and improving user experience with smart technology solutions.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "14",
    project: "3D Printed Sustainable Housing",
    description:
      "3D Printed Sustainable Housing offers innovative construction methods that reduce building time and materials, promoting affordable and eco-friendly housing solutions.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "15",
    project: "Robotics in Precision Agriculture",
    description:
      "Robotics in Precision Agriculture enhances agricultural efficiency and sustainability through automated tasks, precision farming techniques, and data-driven decision-making.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "16",
    project: "Clean Water Filtration Technology",
    description:
      "Clean Water Filtration Technology provides advanced solutions for purifying water, ensuring access to clean drinking water and addressing global water scarcity challenges.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "17",
    project: "Renewable Energy Forecasting System",
    description:
      "Renewable Energy Forecasting System utilizes predictive analytics to optimize the generation and distribution of renewable energy, enhancing efficiency and grid stability.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "18",
    project: "AI for Wildlife Conservation",
    description:
      "AI for Wildlife Conservation applies artificial intelligence to protect endangered species and habitats, promoting biodiversity and sustainable ecosystems.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "19",
    project: "Smart Grid Technology",
    description:
      "Smart Grid Technology modernizes the electricity grid to improve efficiency, reliability, and sustainability, supporting the integration of renewable energy sources.",
    image: "https://via.placeholder.com/350x150"
  },
  {
    stall: "20",
    project: "Cybersecurity Solutions for SMEs",
    description:
      "Cybersecurity Solutions for SMEs offer robust protection against digital threats, safeguarding business data and systems with advanced security measures.",
    image: "https://via.placeholder.com/350x150"
  }
];

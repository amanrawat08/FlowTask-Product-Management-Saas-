type ProjectStatus = "In Progress" | "Completed" | "Planning";

export interface Project {
  id: number;
  name: string;
  description: string;
  progress: number;
  status: ProjectStatus;
  tasks: number;
  members: number;
  dueDate: string;
}
type TeamMemberStatus = "online" | "offline" | "away";
export interface TeamMember {
    id: number;
    name: string;
    role: string;
    email: string;
    avatar: string;
    location: string;
    status: TeamMemberStatus;
    statistics: {
        projects: number;
        tasks: number;
        completed: number;
    };
    about: string;
} 

export const projectsData: Project[] = [
  {
    id: 1,
    name: "E-Commerce Website",
    description:
      "Build a modern e-commerce platform with product listing, cart, and checkout.",
    progress: 75,
    status: "In Progress",
    tasks: 24,
    members: 5,
    dueDate: "Sep 15, 2026",
  },
  {
    id: 2,
    name: "Mobile Banking App",
    description:
      "Develop a secure mobile banking application with payment and transaction features.",
    progress: 45,
    status: "In Progress",
    tasks: 32,
    members: 7,
    dueDate: "Oct 05, 2026",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "Create a responsive portfolio website for showcasing projects and skills.",
    progress: 100,
    status: "Completed",
    tasks: 15,
    members: 2,
    dueDate: "Aug 28, 2026",
  },
  {
    id: 4,
    name: "Job Portal",
    description:
      "Build a job portal where candidates can find jobs and companies can hire talent.",
    progress: 60,
    status: "In Progress",
    tasks: 40,
    members: 8,
    dueDate: "Sep 30, 2026",
  },
  {
    id: 5,
    name: "CRM Dashboard",
    description:
      "Create a customer relationship management dashboard with analytics and reports.",
    progress: 30,
    status: "In Progress",
    tasks: 28,
    members: 4,
    dueDate: "Oct 20, 2026",
  },
  {
    id: 6,
    name: "Task Management System",
    description:
      "Develop a collaborative task management system for teams and projects.",
    progress: 85,
    status: "In Progress",
    tasks: 35,
    members: 6,
    dueDate: "Sep 10, 2026",
  },
  {
    id: 7,
    name: "Food Delivery App",
    description:
      "Build a food delivery application with restaurants, orders, and delivery tracking.",
    progress: 20,
    status: "Planning",
    tasks: 50,
    members: 9,
    dueDate: "Nov 15, 2026",
  },
  {
    id: 8,
    name: "Analytics Dashboard",
    description:
      "Design an analytics dashboard to visualize business performance and key metrics.",
    progress: 100,
    status: "Completed",
    tasks: 18,
    members: 3,
    dueDate: "Aug 20, 2026",
  },
];

export const profileData: TeamMember[] = [
  {
    id: 1,
    name: "Aman Rawat",
    role: "Frontend Developer",
    email: "aman@example.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    location: "New Delhi",
    statistics: {
      projects: 8,
      tasks: 42,
      completed: 28
    },
    status: "online",
    about:
      "Frontend developer working on web applications and collaborative projects."
  },
  {
    id: 2,
    name: "Olivia Carter",
    role: "Senior Product Designer",
    email: "olivia@example.com",
    avatar: "https://i.pravatar.cc/150?img=47",
    location: "Mumbai",
    statistics: {
      projects: 12,
      tasks: 36,
      completed: 29
    },
    status: "away",
    about:
      "Senior product designer focused on creating intuitive and engaging digital experiences."
  },
  {
    id: 3,
    name: "Ethan Wilson",
    role: "Frontend Developer",
    email: "ethan@example.com",
    avatar: "https://i.pravatar.cc/150?img=33",
    location: "Bangalore",
    statistics: {
      projects: 6,
      tasks: 31,
      completed: 23
    },
    status: "offline",
    about:
      "Frontend developer specializing in responsive web applications and reusable UI components."
  },
  {
    id: 4,
    name: "Sophia Martinez",
    role: "Project Manager",
    email: "sophia@example.com",
    avatar: "https://i.pravatar.cc/150?img=44",
    location: "Hyderabad",
    statistics: {
      projects: 10,
      tasks: 45,
      completed: 38
    },
    status: "online",
    about:
      "Project manager focused on delivering successful projects through effective planning and team collaboration."
  }
];
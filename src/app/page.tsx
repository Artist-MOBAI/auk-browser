import SideBar from "@/components/sidebar";

export default function Home() {
  return (
    <div data-tauri-drag-region className="min-h-screen pt-8">
      <SideBar />
    </div>
  );
}

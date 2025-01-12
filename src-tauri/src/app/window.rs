use tauri::{command, App, Window};

#[command]
pub fn set_window(app: &mut App) -> Window {
    let width = 800.;
    let height = 600.;

    let window = tauri::window::WindowBuilder::new(app, "main")
        .inner_size(width, height)
        .decorations(false)
        .build()
        .unwrap();

    window
}

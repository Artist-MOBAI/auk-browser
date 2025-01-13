#[cfg_attr(mobile, tauri::mobile_entry_point)]
mod app;

use app::{invoke::add_webview, setup::set_webview, window::set_window};

pub fn run_app() {
    tauri::Builder::default()
        .setup(|app| {
            let window = set_window(app);
            set_webview(window);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![add_webview])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

pub fn run() {
    run_app()
}

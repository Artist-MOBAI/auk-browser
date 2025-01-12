#[cfg_attr(mobile, tauri::mobile_entry_point)]
mod app;

use app::{invoke::add_webview, window::set_window};
use tauri::{LogicalPosition, LogicalSize, WebviewUrl};

pub fn run_app() {
    tauri::Builder::default()
        .setup(|app| {
            let width = 800.;
            let height = 600.;

            let window = set_window(app);

            let _sidebar = window.add_child(
                tauri::webview::WebviewBuilder::new("sidebar", WebviewUrl::App(Default::default()))
                    .auto_resize(),
                LogicalPosition::new(0, 0),
                LogicalSize::new(256., height),
            )?;

            let _webview = window.add_child(
                tauri::webview::WebviewBuilder::new(
                    "webview",
                    WebviewUrl::External("https://duck.com".parse().unwrap()),
                )
                .auto_resize(),
                LogicalPosition::new(256., 0.),
                LogicalSize::new(width - 256., height),
            )?;

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![add_webview])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

pub fn run() {
    run_app()
}

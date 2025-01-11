use tauri::{LogicalPosition, LogicalSize, WebviewUrl};

#[tauri::command]
fn add_webview(window: tauri::Window) {
    let width = 800.;
    let height = 600.;

    let _webview = window.add_child(
        tauri::webview::WebviewBuilder::new(
            "webview1",
            WebviewUrl::External("https://bing.com".parse().unwrap()),
        )
        .auto_resize(),
        LogicalPosition::new(256., 0.),
        LogicalSize::new(width - 256., height),
    );
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let width = 800.;
            let height = 600.;

            let window = tauri::window::WindowBuilder::new(app, "main")
                .inner_size(width, height)
                .decorations(false)
                .build()?;

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

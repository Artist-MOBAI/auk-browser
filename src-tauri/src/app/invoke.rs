use tauri::{command, LogicalPosition, LogicalSize, WebviewUrl};

#[command]
pub fn add_webview(window: tauri::Window) {
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

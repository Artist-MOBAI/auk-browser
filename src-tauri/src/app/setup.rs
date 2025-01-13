use tauri::{command, LogicalPosition, LogicalSize, WebviewUrl, Window};

#[command]
pub fn set_webview(window: Window) {
    let width = 800.;
    let height = 600.;

    let _sidebar = window
        .add_child(
            tauri::webview::WebviewBuilder::new("sidebar", WebviewUrl::App(Default::default()))
                .auto_resize(),
            LogicalPosition::new(0, 0),
            LogicalSize::new(256., height),
        )
        .unwrap();

    let _webview = window
        .add_child(
            tauri::webview::WebviewBuilder::new(
                "webview",
                WebviewUrl::External("https://duck.com".parse().unwrap()),
            )
            .auto_resize(),
            LogicalPosition::new(256., 0.),
            LogicalSize::new(width - 256., height),
        )
        .unwrap();
}

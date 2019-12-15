@echo off
:: [Game] Basic Compiler - Windows
:: Window will exit without keypress. Use for general compiling when no errors are present.

:: Set working directory
pushd %~dp0

:: Run the appropriate compiler for the user's CPU architecture.
if %PROCESSOR_ARCHITECTURE% == AMD64 (
    CALL "%~dp0devTools\tweeGo\tweego_win64.exe" -o "%~dp0docs/index.html" "%~dp0src"
) else (
    CALL "%~dp0devTools\tweeGo\tweego_win86.exe" -o "%~dp0docs/index.html" "%~dp0src*"
)

popd
ECHO Done
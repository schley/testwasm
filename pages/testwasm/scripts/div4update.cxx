#include <iostream>

extern "C"
{

int doubler(int value);
int tripler(int value);
const char* div4updateArray();
int div4updateLength();

int doubler(int value) {
    int response = value * 2;
    return response;
}

int tripler(int value) {
    int response = value * 3;
    return response;
}

std::string update = "update from WASM div4update";

const char* div4updateArray()
{
    static bool isToggled = false;
    isToggled = !isToggled;
    if (isToggled) {
        update = "(maclane) WASM isToggled == TRUE";
    }
    else
    {
        update = "(maclane) WASM isToggled == FALSE";
    }
    return update.c_str();
}

int div4updateLength()
{
    int length = (int) (update.size() );
    return length;
}

} // extern C

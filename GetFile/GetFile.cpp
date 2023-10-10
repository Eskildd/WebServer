#include "GetFile.hpp"

std::string getFile::filePath(std::string get)
{
    if(get == "")
        return "/Users/eier/SDK/C++ Projects/webserver/webserver/Files/index.html";
    
    return "/Users/eier/SDK/C++ Projects/webserver/webserver/Files/"+get;
}

std::string getFile::fileExt(std::string get)
{
    if(get == "")
        return "text/html";
    int i;
    int lengthExt = 0;
    for(i = get.length(); get[i] != '.'; i--)
        lengthExt++;
    std::string ext = "";
    for(int n = 0; n<lengthExt-1; n++)
        ext+=get[i+n+1];
    
    if(ext == "css")
        ext="text/CSS";
    else if(ext == "js")
        ext="application/javascript";
        
    return ext;
}

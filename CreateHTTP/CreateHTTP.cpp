#include "CreateHTTP.hpp"
#include <fstream>
#include <string>

void CreateHTTP::updateHTTP(std::string filePath, std::string fileType)
{
    std::ifstream fileStream(filePath);
    
    std::string h = "";
    
    file="";
    
    while(getline(fileStream, h))
    {
        file += h;
        file += "\n";
    }
    sizehtml = file.length();
    
    http="HTTP/1.1 200\nContent-Type: "+fileType+"\n";

    http += "Content-Length:";
    http += std::to_string(sizehtml);
    
    http += "\nConnection: close\n\n";
    
    http += file;
    
    fullHTTP = http.c_str();
    sizeHTTP = strlen(fullHTTP);

    fileStream.close();
}

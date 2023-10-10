#pragma once
#include <iostream>

class CreateHTTP
{
private:
    std::string file = "";
    std::string http = "";
    const char* fullHTTP;
    unsigned long int sizehtml;
    size_t sizeHTTP;
    
public:
    void updateHTTP(std::string filePath, std::string fileType);
    
    const char* getHTTP() {return fullHTTP; };
    size_t getSize() {return sizeHTTP; };
};

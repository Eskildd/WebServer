#include <iostream>
#include <vector>

#include "CreateHTTP.hpp"
#include "Socket.hpp"
#include "getFile.hpp"

std::string getMessage(std::string http)
{
    std::string message;
    for(int i = 5; http[i]!=' ' and i < 100; i++)
    {
        message+=http[i];
    }
    
    return message;
}

int main()
{
    getFile get;
    CreateHTTP h;
    
    Socket s(8080);

    s.bindS();
    s.listenS();
    std::string m = "";

    while(true)
    {
        s.acceptS();
        m = s.readS();
        std::string message = getMessage(m);
        h.updateHTTP(get.filePath(message),get.fileExt(message));
        s.writeS(h.getHTTP(),h.getSize());
    }
    
    return 0;
}

#include "Socket.hpp"

Socket::Socket(int port)
{
    if ((server = socket(AF_INET, SOCK_STREAM, 0)) == 0)
    {
        std::cout << "Error in socket" << "\n";
    }
        
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(port);
    
    memset(address.sin_zero, '\0', sizeof address.sin_zero);
}

Socket::~Socket()
{
    std::cout << "deconst\n";
    close(sockeT);
}

void Socket::bindS()
{
    if (bind(server, (struct sockaddr *)&address, sizeof(address))<0)
    {
        std::cout << "Error with bind" << "\n";
    }
}

void Socket::listenS()
{
    if (listen(server, 10) < 0)
    {
        std::cout << "Error with listen" << "\n";
    }
}

void Socket::acceptS()
{
    if ((sockeT = accept(server, (struct sockaddr *)&address, (socklen_t*)&addrlen))<0)
    {
        std::cout << "Error with accept" << "\n";
    }
}

void Socket::writeS(const char* http, size_t size)
{
    write(sockeT , http , size);
}

std::string Socket::readS()
{
    char message[30000] = {0};
    reaD = read(sockeT , message, 30000);
    
    std::cout << message << "\n";
    
    return std::string(message);
}

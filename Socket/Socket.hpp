#pragma once
#include <iostream>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>

class Socket
{
private:
    int port;
    
    int server, sockeT; long reaD;
    struct sockaddr_in address;
    int addrlen = sizeof(address);
    
public:
    Socket(int port);
    ~Socket();
    void bindS();
    void listenS();
    void acceptS();
    void writeS(const char* http, size_t size);
    std::string readS();
};

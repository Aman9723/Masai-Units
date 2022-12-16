<!-- digital ocean and linode are good to begin -->

machine name - b20 demo
os - ubuntu
instance type - t2.nano -> 1vCPU 0.5Gib Memory
key pair (login) - file.cer
network setting
    * allow ssh traffic from any ip
    * allow https traffic
    * allow http traffic
storage - 8 Gib

<!-- i means input -->
ssh -i file.cer ubuntu@publicipaddress

edit inbound access to add more open ports
FROM nginx
#ARG UserName=gabriel
#ARG UID=1000
#ARG GID=1000

#ARG UserName=gabriel
#ARG UID=1000
#ARG GID=1000

#RUN id -g ${GID} &>/dev/null || groupadd -g ${GID} ${UserName}
#RUN id -u ${UID} &>/dev/null || useradd useradd -m -u ${UID} -g ${GID} -s /bin/bash ${UserName}

WORKDIR /usr/share/nginx/html
COPY ./web/ /usr/share/nginx/html/Lookup
COPY ./data /usr/share/nginx/html/Lookup/data


#run apt-get 

#WORKDIR /tmp/
#RUN git clone https://github.com/GabrielReusRodriguez/LookUp.git
#COPY /tmp/Lookup/Docker/nginx.conf /etc/nginx/nginx.conf

#RUN rm -rf /tmp/Lookup

#WORKDIR /home/${UserName}/



EXPOSE 80
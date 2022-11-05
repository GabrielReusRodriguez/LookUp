FROM nginx

#ARG UserName=lookup
#ARG UID=1000
#ARG GID=1000

#ARG UserName
#ARG UID
#ARG GID

#RUN id -g $GID &>/dev/null || groupadd -g $GID $UserName
#RUN id -u $UID &>/dev/null || useradd useradd -m -u $UID -g $GID -s /bin/bash $UserName
 
WORKDIR /usr/share/nginx/html
#COPY --chown=$UID:$GID ./web/ /usr/share/nginx/html/Lookup
#COPY --chown=$UID:$GID ./data /usr/share/nginx/html/Lookup/data
#COPY --chown=$UID:$GID ./server /usr/share/nginx/html/Lookup/server
COPY  ./web/ /usr/share/nginx/html/Lookup
COPY  ./data /usr/share/nginx/html/Lookup/data
COPY  ./server /usr/share/nginx/html/Lookup/server



EXPOSE 80
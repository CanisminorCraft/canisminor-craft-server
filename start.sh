#!/bin/sh
java -Dlog4j.configurationFile=log4j2.xml -d64 -server -XX:+UseConcMarkSweepGC -Xmx900M -Xms512M -jar spigot-1.11.jar nogui

---
id: deployment
title: Deployment
---

Here are some recommendations for deployment:
1. **Make sure you have enough memory and storage!** The server will start returning errors when your server runs out of resources, as you'd expect.
2. **When deploying on docker**:
   - Try to map the volume to a local path. We've had unwarranted data losses when we accidentally ended up running a `docker system prune`
   - Make sure you have your networking configured right. For example, if you don't map your ports correctly, you'll not be able to access the database outside docker (without running `docker inspect` to find the IP of the container)
   - Keep a separate folder for all your docker containers:
     - Create a directory in your home directory like: `$HOME/docker-data`
     - Then for every Docker image (whether it is Skytable or any other container) create a subfolder in that directory and map
       the subfolder as a volume for persistence
3. **Check your firewall**: You want to be very sure about this! If you're starting your database on a different server (as you should; ideally you keep your database server separate from the host running your application server) then make sure that the ports are open and allowed
4. **Set up virtual memory and monitoring**: To avoid exhausting resources, set up monitoring on your node and enable virtual memory to temporarily avoid OOMs

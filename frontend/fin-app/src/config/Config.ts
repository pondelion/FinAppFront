

class Config {

  server: string;
  server_port: number;

  constructor(
    server: string,
    port: number
  ) {
    this.server = server
    this.server_port = port
  }

}


const devConfig = new Config(
  '192.168.111.2', 5000
)

export const config = devConfig

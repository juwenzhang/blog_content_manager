// src/utils/echarts.ts
import * as echarts from 'echarts'

interface renderEngineOptions {
  renderEngine: 'svg' | 'canvas'
}

class MyEcharts {
  private readonly renderEngine: renderEngineOptions
  private readonly echarts: any
  private readonly config: any
  private readonly container: HTMLElement

  constructor(
    container: HTMLElement,
    config: any,
    renderEngineOptions: renderEngineOptions = { renderEngine: 'svg' },
  ) {
    this.renderEngine = renderEngineOptions
    this.config = config
    this.container = container
    this.echarts = echarts.init(container)
  }

  public initEcharts() {
    this.echarts.setOption(this.config, null, this.renderEngine.renderEngine)
  }

  public resize() {
    this.echarts.resize()
  }

  public dispose() {
    this.echarts.dispose()
  }

  public getInstance() {
    return this.echarts
  }

  public getContainer() {
    return this.container
  }

  public getConfig() {
    return this.config
  }
}

export default MyEcharts

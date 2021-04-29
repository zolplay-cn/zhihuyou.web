import renderer from 'react-test-renderer'
import Home from './index'

describe('Home Page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

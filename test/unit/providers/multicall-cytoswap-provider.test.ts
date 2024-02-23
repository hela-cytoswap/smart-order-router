// import { BaseProvider } from '@ethersproject/providers'
// import { mocked } from 'ts-jest/utils';
// import { CytoswapMulticallProvider } from '../../../src/providers/multicall-cytoswap-provider';
// import { IERC20Metadata__factory } from '../../../src/types/v3/factories/IERC20Metadata__factory';
// import { CytoswapInterfaceMulticall__factory } from '../../../src/types/v3/factories/CytoswapInterfaceMulticall__factory';
// import { CytoswapInterfaceMulticall } from '../../../src/types/v3/CytoswapInterfaceMulticall';

/* jest.mock('../../src/types/v3/CytoswapInterfaceMulticall', () => {
  return {
    CytoswapInterfaceMulticall: jest.fn().mockImplementation(() => {
      return {
        callStatic: {
          multicall: () => {
            return {
              blockNumber: BigNumber.from(10000),
              returnData: [
                {
                  success: true,
                  gasUsed: BigNumber.from(100),
                  returnData: '0x0',
                },
              ],
            } as any;
          },
        },
      };
    }),
  };
}); */

describe.skip('cytoswap multicall provider', () => {
  test('placeholder', async () => {
    return;
  });

  /*
  let cytoswapMulticallProvider: CytoswapMulticallProvider;
  const erc20Interface = IERC20Metadata__factory.createInterface();

  let mockProvider: jest.Mocked<BaseProvider>;

  let multicallMock: jest.Mocked<CytoswapInterfaceMulticall>;

  beforeAll(() => {
    multicallMock = createMockInstance(CytoswapInterfaceMulticall);

    mocked(multicallMock.callStatic.multicall).mockResolvedValue({
      blockNumber: BigNumber.from(10000),
      returnData: [
        { success: true, gasUsed: BigNumber.from(100), returnData: '0x0' },
      ],
    } as any);

    mocked(CytoswapInterfaceMulticall__factory.connect).mockReturnValue(
      CytoswapInterfaceMulticall as any
    );

    mockProvider = createMockInstance(BaseProvider);
    cytoswapMulticallProvider = new CytoswapMulticallProvider(
      createMockInstance(BaseProvider)
    );
  });

  describe('callSameFunctionOnMultipleContracts', () => {
    test('succeeds', async () => {
      const result =
        await cytoswapMulticallProvider.callSameFunctionOnMultipleContracts<
          undefined,
          [string]
        >({
          addresses: [
            '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
            '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9C',
          ],
          contractInterface: erc20Interface,
          functionName: 'decimals',
        });

      console.log({ result }, 'Result');
      expect(multicallMock).toHaveBeenCalledTimes(1);
      mockProvider;
    });
  });
  */
});

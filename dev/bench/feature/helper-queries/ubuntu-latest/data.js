window.BENCHMARK_DATA = {
  "lastUpdate": 1702811600381,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "ae5b7b66f2fe6d37df8ebed9817e2c3b06c12a69",
          "message": "Changelog",
          "timestamp": "2023-12-17T17:23:08+09:00",
          "tree_id": "6d61ab432ba0e1be66424d63f8c2401df9e7828e",
          "url": "https://github.com/greymistcube/libplanet/commit/ae5b7b66f2fe6d37df8ebed9817e2c3b06c12a69"
        },
        "date": 1702802135079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3758514.2841145834,
            "unit": "ns",
            "range": "± 52387.64715894969"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1228260.756610577,
            "unit": "ns",
            "range": "± 2584.4375852383596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 790158.1709798177,
            "unit": "ns",
            "range": "± 2122.866163684783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984035.8330592106,
            "unit": "ns",
            "range": "± 43867.08681140891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617066.1829176683,
            "unit": "ns",
            "range": "± 834.5734830400771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571790.1661783854,
            "unit": "ns",
            "range": "± 1932.1896863899499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2460803,
            "unit": "ns",
            "range": "± 101436.0106228475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2583056.5185185187,
            "unit": "ns",
            "range": "± 108769.41271097412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3195917.35,
            "unit": "ns",
            "range": "± 62167.661691060974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3086320.522727273,
            "unit": "ns",
            "range": "± 106949.46149434183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7042479.055555556,
            "unit": "ns",
            "range": "± 218111.1539786792"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41966.536082474224,
            "unit": "ns",
            "range": "± 5915.019172732129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204119.96666666667,
            "unit": "ns",
            "range": "± 10218.556072077807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210052.71739130435,
            "unit": "ns",
            "range": "± 17820.959323054973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167196.32,
            "unit": "ns",
            "range": "± 4355.848527363335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3086903.533333333,
            "unit": "ns",
            "range": "± 47975.53207010344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2792967.5,
            "unit": "ns",
            "range": "± 21227.527468432985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15682.336734693878,
            "unit": "ns",
            "range": "± 3266.8354464059535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75197.45959595959,
            "unit": "ns",
            "range": "± 10552.91027846298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79094.9494949495,
            "unit": "ns",
            "range": "± 16464.626012828874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91463.05102040817,
            "unit": "ns",
            "range": "± 21913.343900803815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6145.329896907217,
            "unit": "ns",
            "range": "± 1812.9361930399987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17717.073684210525,
            "unit": "ns",
            "range": "± 3289.5756670094947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5622604.7,
            "unit": "ns",
            "range": "± 37502.082616836095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14957544.066666666,
            "unit": "ns",
            "range": "± 165959.2250233544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36825859.46666667,
            "unit": "ns",
            "range": "± 189599.89149479516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75243114.03846154,
            "unit": "ns",
            "range": "± 192589.33340124498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151855674.33333334,
            "unit": "ns",
            "range": "± 1131982.5030858577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 968209.8085106383,
            "unit": "ns",
            "range": "± 95591.12339115683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1929062.9444444445,
            "unit": "ns",
            "range": "± 101326.35783620174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1439219.9166666667,
            "unit": "ns",
            "range": "± 115559.83481402876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6202015.380434782,
            "unit": "ns",
            "range": "± 347802.7822539678"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "6b5f6607eb743676bd8bdd4086e51973828d3ba3",
          "message": "Changelog",
          "timestamp": "2023-12-17T17:26:18+09:00",
          "tree_id": "eb2b1eee3447ce5267dacd08576a272bff97ff42",
          "url": "https://github.com/greymistcube/libplanet/commit/6b5f6607eb743676bd8bdd4086e51973828d3ba3"
        },
        "date": 1702802237632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3737653.3802083335,
            "unit": "ns",
            "range": "± 15015.034666239038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208006.191127232,
            "unit": "ns",
            "range": "± 2288.521265657307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769159.2669270834,
            "unit": "ns",
            "range": "± 2984.3977756985814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962458.6403645833,
            "unit": "ns",
            "range": "± 25597.52950374223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644901.3576049805,
            "unit": "ns",
            "range": "± 12111.508157211498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570629.6431361607,
            "unit": "ns",
            "range": "± 1348.7751090123181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2351101.5,
            "unit": "ns",
            "range": "± 35905.50133496794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2536169.785714286,
            "unit": "ns",
            "range": "± 71363.67754851677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3075317.2580645164,
            "unit": "ns",
            "range": "± 93773.34187815773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2916760.212121212,
            "unit": "ns",
            "range": "± 136818.5989072353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6845173.538461538,
            "unit": "ns",
            "range": "± 180965.78380151995"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40381.37113402062,
            "unit": "ns",
            "range": "± 5968.438741133067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197063.44915254237,
            "unit": "ns",
            "range": "± 8118.467097587532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184345.72727272726,
            "unit": "ns",
            "range": "± 7225.875662569146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164780.75,
            "unit": "ns",
            "range": "± 3594.666207693955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3049600.3076923075,
            "unit": "ns",
            "range": "± 21600.717481851596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2765828.7333333334,
            "unit": "ns",
            "range": "± 37017.83709137812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14359.102040816326,
            "unit": "ns",
            "range": "± 2860.438589179991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66014.2967032967,
            "unit": "ns",
            "range": "± 5605.743317734263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51688.969696969696,
            "unit": "ns",
            "range": "± 1633.753356630991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85952.39583333333,
            "unit": "ns",
            "range": "± 9113.494220953395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3184.1237113402062,
            "unit": "ns",
            "range": "± 767.12981378822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12928.484536082475,
            "unit": "ns",
            "range": "± 2087.944598928783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5434362.714285715,
            "unit": "ns",
            "range": "± 11453.8170824508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14122082.692307692,
            "unit": "ns",
            "range": "± 83932.78586701049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36097505.42307692,
            "unit": "ns",
            "range": "± 220186.0192422389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74312418.96666667,
            "unit": "ns",
            "range": "± 896850.1397696486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149026711.14285713,
            "unit": "ns",
            "range": "± 1256168.7741847832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 960109.53125,
            "unit": "ns",
            "range": "± 75679.693434056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1833858.14,
            "unit": "ns",
            "range": "± 73801.73907386558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1401682.78125,
            "unit": "ns",
            "range": "± 119943.69561942962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6017502.308510638,
            "unit": "ns",
            "range": "± 355000.7461875552"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "5075a20c564790141be3da4cb8bf272955e1107d",
          "message": "Changelog",
          "timestamp": "2023-12-17T20:01:58+09:00",
          "tree_id": "26d672d2c7ef1653d612add104911d0112611adc",
          "url": "https://github.com/greymistcube/libplanet/commit/5075a20c564790141be3da4cb8bf272955e1107d"
        },
        "date": 1702811585588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3616484.1341145835,
            "unit": "ns",
            "range": "± 27906.49493936684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1172654.3389423077,
            "unit": "ns",
            "range": "± 10901.01106205345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740311.0315504808,
            "unit": "ns",
            "range": "± 8732.060719640102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1873604.0184895834,
            "unit": "ns",
            "range": "± 23192.095984390427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 592854.8008463542,
            "unit": "ns",
            "range": "± 5930.332602743693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549590.8264723558,
            "unit": "ns",
            "range": "± 2572.914757999594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2271060.0084745763,
            "unit": "ns",
            "range": "± 98973.27408401425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2363777.37628866,
            "unit": "ns",
            "range": "± 143503.7246516661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2985853.75,
            "unit": "ns",
            "range": "± 132038.8619948784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2916102.375,
            "unit": "ns",
            "range": "± 73021.93689082784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6828689.118644068,
            "unit": "ns",
            "range": "± 300918.17203215783"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40097.926315789475,
            "unit": "ns",
            "range": "± 5067.746965173331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186302.37362637362,
            "unit": "ns",
            "range": "± 11285.531911501508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180792.45555555556,
            "unit": "ns",
            "range": "± 10842.930698775674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155795.68421052632,
            "unit": "ns",
            "range": "± 6777.627353385061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2975654.0862068967,
            "unit": "ns",
            "range": "± 84970.7186705755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2721656.794117647,
            "unit": "ns",
            "range": "± 82277.74621017536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13736.969696969696,
            "unit": "ns",
            "range": "± 2394.350107617486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62779.242105263154,
            "unit": "ns",
            "range": "± 8024.769151204488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53972,
            "unit": "ns",
            "range": "± 6103.245856049176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58533.47959183674,
            "unit": "ns",
            "range": "± 14636.988947458862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2893.5520833333335,
            "unit": "ns",
            "range": "± 403.82687457274676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14530.226804123711,
            "unit": "ns",
            "range": "± 1506.868652379515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5673940.088235294,
            "unit": "ns",
            "range": "± 110648.73153591664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14699305.666666666,
            "unit": "ns",
            "range": "± 271267.7911615507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35542760.8,
            "unit": "ns",
            "range": "± 818342.228841532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72098841,
            "unit": "ns",
            "range": "± 1191271.9678955316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 144133042.7857143,
            "unit": "ns",
            "range": "± 1953538.7436419632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 917977.6505376344,
            "unit": "ns",
            "range": "± 73800.64093157914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1789797.4239130435,
            "unit": "ns",
            "range": "± 106219.20675320383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1378679.3936170214,
            "unit": "ns",
            "range": "± 143962.19576487973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6023358.68,
            "unit": "ns",
            "range": "± 392410.2851534986"
          }
        ]
      }
    ]
  }
}
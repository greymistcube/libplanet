window.BENCHMARK_DATA = {
  "lastUpdate": 1689324184439,
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
          "id": "f2c4aee1803596e177022ea1920efaac6587e0ef",
          "message": "Prepare 2.4.2",
          "timestamp": "2023-07-14T17:22:48+09:00",
          "tree_id": "29f5b2dadb9582f291c89f15d3058758bae66af2",
          "url": "https://github.com/greymistcube/libplanet/commit/f2c4aee1803596e177022ea1920efaac6587e0ef"
        },
        "date": 1689323829910,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298879.5416666667,
            "unit": "ns",
            "range": "± 11785.630460859065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284148,
            "unit": "ns",
            "range": "± 10617.46117382954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256234.5052631579,
            "unit": "ns",
            "range": "± 14696.819615339335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4651200.785714285,
            "unit": "ns",
            "range": "± 50753.12051517101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4265699.2,
            "unit": "ns",
            "range": "± 67511.66030101763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21428.5,
            "unit": "ns",
            "range": "± 2151.874968282516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95977.70833333333,
            "unit": "ns",
            "range": "± 6917.392386573467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80274.16666666667,
            "unit": "ns",
            "range": "± 5163.736274130577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112247.44897959183,
            "unit": "ns",
            "range": "± 18169.650749908727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5838.816326530612,
            "unit": "ns",
            "range": "± 838.9717976526204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21517.84375,
            "unit": "ns",
            "range": "± 1871.7232326226742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570326.1041666667,
            "unit": "ns",
            "range": "± 112799.08256751578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2923017.512820513,
            "unit": "ns",
            "range": "± 101584.84105283668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1976299.9125,
            "unit": "ns",
            "range": "± 102515.87706637666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5346949.150943397,
            "unit": "ns",
            "range": "± 221014.63844996577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6089261.795833333,
            "unit": "ns",
            "range": "± 21991.134498206426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1917643.8271484375,
            "unit": "ns",
            "range": "± 2015.9577679429883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405785.7950520834,
            "unit": "ns",
            "range": "± 3372.460509016681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627069.331770833,
            "unit": "ns",
            "range": "± 2744.8580304934862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860636.8645368303,
            "unit": "ns",
            "range": "± 1542.5908246217427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763710.2522135417,
            "unit": "ns",
            "range": "± 246.70746206118568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3604455.117647059,
            "unit": "ns",
            "range": "± 66588.02474815043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3872142.25,
            "unit": "ns",
            "range": "± 88916.97542910761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4561559.933333334,
            "unit": "ns",
            "range": "± 74908.27381105762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4264308.970588235,
            "unit": "ns",
            "range": "± 136602.57957444672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6806521.555555556,
            "unit": "ns",
            "range": "± 187508.4637682202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8519540.28125,
            "unit": "ns",
            "range": "± 263155.83506616374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22921093.785714287,
            "unit": "ns",
            "range": "± 119377.7568787925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57397903.6,
            "unit": "ns",
            "range": "± 345012.6926849007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114449343.26666667,
            "unit": "ns",
            "range": "± 556978.0536154091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229063477.93333334,
            "unit": "ns",
            "range": "± 1548548.2184736065"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50173.709677419356,
            "unit": "ns",
            "range": "± 2843.325852576005"
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
          "id": "f16dcf2de27aaa03bf5448c06e7c1089506aab0f",
          "message": "Prepare 2.4.2",
          "timestamp": "2023-07-14T17:23:37+09:00",
          "tree_id": "517c6b292d84287d60461f4e3faf83a43b97c6a6",
          "url": "https://github.com/greymistcube/libplanet/commit/f16dcf2de27aaa03bf5448c06e7c1089506aab0f"
        },
        "date": 1689324175543,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356444.65934065933,
            "unit": "ns",
            "range": "± 43519.9718745364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355109.1855670103,
            "unit": "ns",
            "range": "± 46479.92681643377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333494.73626373627,
            "unit": "ns",
            "range": "± 36127.842465590984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5608565.517241379,
            "unit": "ns",
            "range": "± 243567.01065629465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5045118.5696202535,
            "unit": "ns",
            "range": "± 261184.35076229222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27785.864583333332,
            "unit": "ns",
            "range": "± 7400.749507732724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124711.67368421053,
            "unit": "ns",
            "range": "± 20843.09695943648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 140344.52631578947,
            "unit": "ns",
            "range": "± 18116.998904779717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149719.0618556701,
            "unit": "ns",
            "range": "± 26016.84302796877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7999.097826086957,
            "unit": "ns",
            "range": "± 1019.6952901874106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25180.659340659342,
            "unit": "ns",
            "range": "± 5328.578088883417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1814629.9894736842,
            "unit": "ns",
            "range": "± 172009.5807121699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3528771.2736842106,
            "unit": "ns",
            "range": "± 282016.03879583604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2397387.224489796,
            "unit": "ns",
            "range": "± 175658.50943268885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7025907.285714285,
            "unit": "ns",
            "range": "± 527662.5167287667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7544807.803125,
            "unit": "ns",
            "range": "± 106775.78650841981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2445307.943359375,
            "unit": "ns",
            "range": "± 49414.217082271476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1784634.2177083334,
            "unit": "ns",
            "range": "± 18669.981502371662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3416766.7552083335,
            "unit": "ns",
            "range": "± 94814.5621689663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1114053.5387517756,
            "unit": "ns",
            "range": "± 41021.400938954546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 991734.7213541666,
            "unit": "ns",
            "range": "± 15301.264145524223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4462770.588235294,
            "unit": "ns",
            "range": "± 212062.02087598576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4647653.270833333,
            "unit": "ns",
            "range": "± 388727.591660914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5882634.857142857,
            "unit": "ns",
            "range": "± 163400.76921023766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5175088.425531914,
            "unit": "ns",
            "range": "± 314531.7665179683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9996611.5,
            "unit": "ns",
            "range": "± 487919.79143341025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11083257.333333334,
            "unit": "ns",
            "range": "± 401606.2982981162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28328814.727272727,
            "unit": "ns",
            "range": "± 678834.3079529918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73786531.68571429,
            "unit": "ns",
            "range": "± 2232713.9553226377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145863684.8846154,
            "unit": "ns",
            "range": "± 3972313.275189361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294399640.7058824,
            "unit": "ns",
            "range": "± 4962294.087088788"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62992.35164835165,
            "unit": "ns",
            "range": "± 11685.073010159038"
          }
        ]
      }
    ]
  }
}
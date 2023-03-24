window.BENCHMARK_DATA = {
  "lastUpdate": 1679618205443,
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
          "id": "f538f484557cd8661e871aa47925b2262bb986c6",
          "message": "Added caching to AccountStateDeltaImpl",
          "timestamp": "2023-03-24T09:17:52+09:00",
          "tree_id": "c3296d57c93f2484d8a6daaf2ff57cefa8e546e2",
          "url": "https://github.com/greymistcube/libplanet/commit/f538f484557cd8661e871aa47925b2262bb986c6"
        },
        "date": 1679618053627,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 114586.8686868687,
            "unit": "ns",
            "range": "± 14085.363994953628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5061669.322916667,
            "unit": "ns",
            "range": "± 82572.69787865585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527857.4479166667,
            "unit": "ns",
            "range": "± 2060.6724422570355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1182199.8046875,
            "unit": "ns",
            "range": "± 4767.438057349833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673309.375,
            "unit": "ns",
            "range": "± 18059.665460612683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836824.9674479166,
            "unit": "ns",
            "range": "± 1418.2217476571368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759465.0618489584,
            "unit": "ns",
            "range": "± 2819.5805013306403"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4993486.338975694,
            "unit": "ns",
            "range": "± 163792.09277583586"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6332200,
            "unit": "ns",
            "range": "± 83797.33204072107"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26594983.333333332,
            "unit": "ns",
            "range": "± 304847.57989804837"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6742557.303370787,
            "unit": "ns",
            "range": "± 371748.30068928737"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29840280.769230768,
            "unit": "ns",
            "range": "± 791411.6314632888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95025.58139534884,
            "unit": "ns",
            "range": "± 10876.09289758166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218023.59550561797,
            "unit": "ns",
            "range": "± 12032.84352466492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207490.47619047618,
            "unit": "ns",
            "range": "± 4771.153399536088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3614771.4285714286,
            "unit": "ns",
            "range": "± 101644.81498186916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9135666.666666666,
            "unit": "ns",
            "range": "± 214056.17564866782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29116.494845360823,
            "unit": "ns",
            "range": "± 2265.855265878792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62546.8085106383,
            "unit": "ns",
            "range": "± 6900.127817542325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51134.0206185567,
            "unit": "ns",
            "range": "± 5090.266172598813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135050,
            "unit": "ns",
            "range": "± 45918.67587174562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9964.948453608247,
            "unit": "ns",
            "range": "± 1230.348971253803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26783.870967741936,
            "unit": "ns",
            "range": "± 2942.4660731885015"
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
          "id": "b1116e9d097b3b696572b0eaa77a2eec90c1143e",
          "message": "Added caching to AccountStateDeltaImpl",
          "timestamp": "2023-03-24T09:21:59+09:00",
          "tree_id": "ecfd3ce8bde11199f643174bd303a620d5911aaf",
          "url": "https://github.com/greymistcube/libplanet/commit/b1116e9d097b3b696572b0eaa77a2eec90c1143e"
        },
        "date": 1679618184332,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102590,
            "unit": "ns",
            "range": "± 16375.421962332588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5034667.918346774,
            "unit": "ns",
            "range": "± 150621.92622384202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1530773.7825520833,
            "unit": "ns",
            "range": "± 5984.3620432611815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1126195.424107143,
            "unit": "ns",
            "range": "± 4859.841560024961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555334.375,
            "unit": "ns",
            "range": "± 7153.984357510156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813956.8777901785,
            "unit": "ns",
            "range": "± 2646.7563930560086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732060.986328125,
            "unit": "ns",
            "range": "± 1345.2547565201776"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3802786.0026041665,
            "unit": "ns",
            "range": "± 9638.346423268844"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5577427.848101266,
            "unit": "ns",
            "range": "± 287600.7408502587"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24901221.42857143,
            "unit": "ns",
            "range": "± 427838.71004525386"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6439677,
            "unit": "ns",
            "range": "± 491198.65467501583"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26171893.333333332,
            "unit": "ns",
            "range": "± 418354.4933369762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 80794.38202247191,
            "unit": "ns",
            "range": "± 4655.870184034583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207373.33333333334,
            "unit": "ns",
            "range": "± 3644.460898143268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187163,
            "unit": "ns",
            "range": "± 31942.52621205907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3282193.3333333335,
            "unit": "ns",
            "range": "± 28383.533120120057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8211093.333333333,
            "unit": "ns",
            "range": "± 73738.46124422902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13733.333333333334,
            "unit": "ns",
            "range": "± 1040.4232889334219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 40718.81720430108,
            "unit": "ns",
            "range": "± 3312.6561815395357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53574.74747474748,
            "unit": "ns",
            "range": "± 11334.112709205252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121870.83333333333,
            "unit": "ns",
            "range": "± 20107.18602451774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6252.631578947368,
            "unit": "ns",
            "range": "± 1112.7732373289562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13021.739130434782,
            "unit": "ns",
            "range": "± 945.530386301263"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1702802141056,
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
      }
    ]
  }
}
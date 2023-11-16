window.BENCHMARK_DATA = {
  "lastUpdate": 1700108053127,
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
          "id": "e0a3acc770b366a4aac36b44f933beca69ce8ce8",
          "message": "Tune ContextTimeoutOption",
          "timestamp": "2023-11-16T13:03:22+09:00",
          "tree_id": "dcf69d0992d138a93059d895526a95cd3535e952",
          "url": "https://github.com/greymistcube/libplanet/commit/e0a3acc770b366a4aac36b44f933beca69ce8ce8"
        },
        "date": 1700108047028,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5659073.233333333,
            "unit": "ns",
            "range": "± 18417.185268371595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14397148.2,
            "unit": "ns",
            "range": "± 165733.95630958845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36710372.928571425,
            "unit": "ns",
            "range": "± 106522.13989767162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 79693843.14285715,
            "unit": "ns",
            "range": "± 633692.1593780443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149027941.42857143,
            "unit": "ns",
            "range": "± 1199489.5723975336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 935702.7395833334,
            "unit": "ns",
            "range": "± 62747.550291666004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1889177.152173913,
            "unit": "ns",
            "range": "± 72221.57659129219"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495773.9189189188,
            "unit": "ns",
            "range": "± 74929.58804396659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6892296.858585859,
            "unit": "ns",
            "range": "± 458105.56010812597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2406240.730769231,
            "unit": "ns",
            "range": "± 26543.541452846384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2502599.463414634,
            "unit": "ns",
            "range": "± 89584.05799613499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3146118.4285714286,
            "unit": "ns",
            "range": "± 74056.03082029946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3065134.9647887326,
            "unit": "ns",
            "range": "± 148063.86348762107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7717023.833333333,
            "unit": "ns",
            "range": "± 181061.90473021468"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40997.63917525773,
            "unit": "ns",
            "range": "± 5781.3971119761345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3701268.2880208334,
            "unit": "ns",
            "range": "± 52876.58544261676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1159494.7091064453,
            "unit": "ns",
            "range": "± 6105.108070328389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750335.8693659856,
            "unit": "ns",
            "range": "± 1387.7753386857269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965760.4869791667,
            "unit": "ns",
            "range": "± 6050.015970702126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627541.2824358259,
            "unit": "ns",
            "range": "± 1063.001807902527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572081.7524789664,
            "unit": "ns",
            "range": "± 2521.948638268623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198693.75510204083,
            "unit": "ns",
            "range": "± 7802.292896243739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188563.775,
            "unit": "ns",
            "range": "± 6036.007482822757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163996.25925925927,
            "unit": "ns",
            "range": "± 3645.4610196220788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3132058.466666667,
            "unit": "ns",
            "range": "± 49177.70342611239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2897194.533333333,
            "unit": "ns",
            "range": "± 35307.57347706148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14707.826315789474,
            "unit": "ns",
            "range": "± 2084.770753467363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69051.13829787234,
            "unit": "ns",
            "range": "± 6625.613730713935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92978.38888888889,
            "unit": "ns",
            "range": "± 1520.475588866809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82914.18181818182,
            "unit": "ns",
            "range": "± 19722.248443848654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4570.373737373738,
            "unit": "ns",
            "range": "± 2146.341978694755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15475.521276595744,
            "unit": "ns",
            "range": "± 1909.6480885553456"
          }
        ]
      }
    ]
  }
}
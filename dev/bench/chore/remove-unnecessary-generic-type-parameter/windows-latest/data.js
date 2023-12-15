window.BENCHMARK_DATA = {
  "lastUpdate": 1702612483753,
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
          "id": "6bf89675478468b8f5eaeae9d3c6c1d91e28114f",
          "message": "Removed IBlockPolicy as generic type parameter",
          "timestamp": "2023-12-15T12:41:57+09:00",
          "tree_id": "eaa67ccbf19f077892993e50773ef00e76df5b9c",
          "url": "https://github.com/greymistcube/libplanet/commit/6bf89675478468b8f5eaeae9d3c6c1d91e28114f"
        },
        "date": 1702612446461,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 925450,
            "unit": "ns",
            "range": "± 93786.28617354887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1660998.3606557378,
            "unit": "ns",
            "range": "± 67642.07145409647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1343322,
            "unit": "ns",
            "range": "± 143698.21532248997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5469234.042553191,
            "unit": "ns",
            "range": "± 310804.1476291494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34700,
            "unit": "ns",
            "range": "± 1494.7179727901241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5021586.666666667,
            "unit": "ns",
            "range": "± 43428.21444088865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12694706.666666666,
            "unit": "ns",
            "range": "± 129681.11144907212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32445780,
            "unit": "ns",
            "range": "± 288571.02913692297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63364373.333333336,
            "unit": "ns",
            "range": "± 440319.20315455995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128024740,
            "unit": "ns",
            "range": "± 805695.3924583232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3254387.6116071427,
            "unit": "ns",
            "range": "± 5298.478811355922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1040400.6911057692,
            "unit": "ns",
            "range": "± 2205.6872025419907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731706.6545758928,
            "unit": "ns",
            "range": "± 1267.6013934437576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1899197.9166666667,
            "unit": "ns",
            "range": "± 4728.074099636786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617265.2762276785,
            "unit": "ns",
            "range": "± 1205.4759709338086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549564.4466145834,
            "unit": "ns",
            "range": "± 993.4811583814503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141012.5,
            "unit": "ns",
            "range": "± 83561.93174029794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2259221.8181818184,
            "unit": "ns",
            "range": "± 83601.57869081157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2741300,
            "unit": "ns",
            "range": "± 68284.76470567274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2570710.5263157897,
            "unit": "ns",
            "range": "± 104767.87042281774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6341337.5,
            "unit": "ns",
            "range": "± 292058.5489790464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167824.2857142857,
            "unit": "ns",
            "range": "± 7174.258245035485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162038.57142857142,
            "unit": "ns",
            "range": "± 7783.954005426298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145162.5,
            "unit": "ns",
            "range": "± 4077.6930543091753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2697926.3157894737,
            "unit": "ns",
            "range": "± 58408.207586351185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2548800,
            "unit": "ns",
            "range": "± 39612.11935759055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10060.63829787234,
            "unit": "ns",
            "range": "± 1015.1770951077848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50843.333333333336,
            "unit": "ns",
            "range": "± 3886.0756901613386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43787.878787878784,
            "unit": "ns",
            "range": "± 2046.273547509089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53115.15151515151,
            "unit": "ns",
            "range": "± 11932.517428048719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2214.5833333333335,
            "unit": "ns",
            "range": "± 426.979394712171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9646.59090909091,
            "unit": "ns",
            "range": "± 933.5322690660831"
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
          "id": "3907c1f970f4913947829abd10a24c748831318f",
          "message": "Removed IBlockPolicy as generic type parameter",
          "timestamp": "2023-12-15T12:42:26+09:00",
          "tree_id": "c34e511f264aa20568ee1980320ad50122fca47b",
          "url": "https://github.com/greymistcube/libplanet/commit/3907c1f970f4913947829abd10a24c748831318f"
        },
        "date": 1702612461800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951327.8350515463,
            "unit": "ns",
            "range": "± 98184.15174883966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1738627.8481012657,
            "unit": "ns",
            "range": "± 89690.01021568372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1335275.7894736843,
            "unit": "ns",
            "range": "± 106269.92700824719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5361183.636363637,
            "unit": "ns",
            "range": "± 226329.67904400348"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34472.97297297297,
            "unit": "ns",
            "range": "± 1628.0332951811636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5151950,
            "unit": "ns",
            "range": "± 27818.236567300337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13108386.666666666,
            "unit": "ns",
            "range": "± 205922.9775102008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32769307.692307692,
            "unit": "ns",
            "range": "± 254893.3844490622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65952136.666666664,
            "unit": "ns",
            "range": "± 511484.1498265705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133557800,
            "unit": "ns",
            "range": "± 1332840.1581370728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3371724.375,
            "unit": "ns",
            "range": "± 9075.72492722343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1040169.5612980769,
            "unit": "ns",
            "range": "± 2096.7643164269607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731894.62890625,
            "unit": "ns",
            "range": "± 2013.5212524964006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934545.2566964286,
            "unit": "ns",
            "range": "± 4989.100771290633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614403.0078125,
            "unit": "ns",
            "range": "± 1387.5142641451212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549301.7803485577,
            "unit": "ns",
            "range": "± 912.0330566488096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2205631.25,
            "unit": "ns",
            "range": "± 86052.6191232941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2297287.037037037,
            "unit": "ns",
            "range": "± 91084.72739510237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2738133.3333333335,
            "unit": "ns",
            "range": "± 34997.013478023415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2695291.304347826,
            "unit": "ns",
            "range": "± 67866.27166744557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6282811.111111111,
            "unit": "ns",
            "range": "± 238489.6197686049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174557.97101449277,
            "unit": "ns",
            "range": "± 8347.778954292917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162283.05084745763,
            "unit": "ns",
            "range": "± 6345.352699155525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140925.92592592593,
            "unit": "ns",
            "range": "± 3161.133267162828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2754700,
            "unit": "ns",
            "range": "± 21799.858856282674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2559923.076923077,
            "unit": "ns",
            "range": "± 25820.442606784578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10814.893617021276,
            "unit": "ns",
            "range": "± 1826.5636957953393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54435.95505617977,
            "unit": "ns",
            "range": "± 4146.692197375552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44129.31034482759,
            "unit": "ns",
            "range": "± 1928.185095276253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58184.04255319149,
            "unit": "ns",
            "range": "± 11784.629165031436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2482.4742268041236,
            "unit": "ns",
            "range": "± 534.24602425567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11089.583333333334,
            "unit": "ns",
            "range": "± 1748.3513537445356"
          }
        ]
      }
    ]
  }
}
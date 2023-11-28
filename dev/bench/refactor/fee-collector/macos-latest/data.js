window.BENCHMARK_DATA = {
  "lastUpdate": 1701157086809,
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
          "id": "036e7abd9c33b20bbb95026fc963dc519670c011",
          "message": "Suggestion",
          "timestamp": "2023-11-28T16:22:14+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/greymistcube/libplanet/commit/036e7abd9c33b20bbb95026fc963dc519670c011"
        },
        "date": 1701157071434,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7992870.25,
            "unit": "ns",
            "range": "± 142785.60179070345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20525178.653846152,
            "unit": "ns",
            "range": "± 885550.3979620922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51597798.677777775,
            "unit": "ns",
            "range": "± 1942993.894815483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97218457.26666667,
            "unit": "ns",
            "range": "± 672354.274042813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206544830.57142857,
            "unit": "ns",
            "range": "± 2364614.078378532"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56171.8085106383,
            "unit": "ns",
            "range": "± 6738.462726759478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295204.5543478261,
            "unit": "ns",
            "range": "± 17641.233100458317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286118.5824175824,
            "unit": "ns",
            "range": "± 18080.76476139825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271243.8461538461,
            "unit": "ns",
            "range": "± 15877.179231647104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3968067.6086956523,
            "unit": "ns",
            "range": "± 97645.38906757504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3883660.5,
            "unit": "ns",
            "range": "± 50147.496623997555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17639.027472527472,
            "unit": "ns",
            "range": "± 1209.5307477664344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83578.18478260869,
            "unit": "ns",
            "range": "± 7613.90856714059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71471.6125,
            "unit": "ns",
            "range": "± 3730.9090333364666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91731.40206185567,
            "unit": "ns",
            "range": "± 13018.106629693853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5285.051546391753,
            "unit": "ns",
            "range": "± 664.791577161814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17348.540229885057,
            "unit": "ns",
            "range": "± 1192.2998277181337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1507372.9175257732,
            "unit": "ns",
            "range": "± 234418.39749583212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2573897.7534246575,
            "unit": "ns",
            "range": "± 122616.5258707203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1929684.8924731184,
            "unit": "ns",
            "range": "± 137693.22690633556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8329962.925,
            "unit": "ns",
            "range": "± 292485.59086931736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3210576.5,
            "unit": "ns",
            "range": "± 205933.90612660276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3351913.3723404254,
            "unit": "ns",
            "range": "± 245727.4451468705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4315133.328767124,
            "unit": "ns",
            "range": "± 213557.5959888973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4082359.7972972975,
            "unit": "ns",
            "range": "± 204534.68817889498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17853313.823232323,
            "unit": "ns",
            "range": "± 2740382.722637549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5385562.13125,
            "unit": "ns",
            "range": "± 46619.688344229384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863111.7756510417,
            "unit": "ns",
            "range": "± 15174.371977882665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1049514.3294270833,
            "unit": "ns",
            "range": "± 11143.539579804115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2423600.8255208335,
            "unit": "ns",
            "range": "± 16924.112631992502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823898.9543269231,
            "unit": "ns",
            "range": "± 5501.066845509251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726270.0216936384,
            "unit": "ns",
            "range": "± 5562.858502479432"
          }
        ]
      }
    ]
  }
}
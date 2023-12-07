window.BENCHMARK_DATA = {
  "lastUpdate": 1701915289623,
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
          "id": "705ff9bd2bef560885a5787490cfcb49bd42c5f8",
          "message": "Commit frequently",
          "timestamp": "2023-12-07T11:02:29+09:00",
          "tree_id": "49d891ca58f88d1fb2a85231602da64a73e414ad",
          "url": "https://github.com/greymistcube/libplanet/commit/705ff9bd2bef560885a5787490cfcb49bd42c5f8"
        },
        "date": 1701915283327,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218045.63541666666,
            "unit": "ns",
            "range": "± 17847.034994860773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202124.16279069768,
            "unit": "ns",
            "range": "± 7201.704606186856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169977.87878787878,
            "unit": "ns",
            "range": "± 5383.073162455485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3116096.8,
            "unit": "ns",
            "range": "± 28346.068359776862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2874092.3333333335,
            "unit": "ns",
            "range": "± 38339.200687820194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19188.378947368423,
            "unit": "ns",
            "range": "± 1598.5223973630214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79496.06,
            "unit": "ns",
            "range": "± 12203.141960722058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66357.73232323233,
            "unit": "ns",
            "range": "± 11046.552197200499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87450.53608247422,
            "unit": "ns",
            "range": "± 10954.999977238185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6377.641414141414,
            "unit": "ns",
            "range": "± 1546.7402655862213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16180.388888888889,
            "unit": "ns",
            "range": "± 3118.2328226910727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3658807.36875,
            "unit": "ns",
            "range": "± 5870.032731099304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1139868.75390625,
            "unit": "ns",
            "range": "± 2813.8698577633913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740925.2685546875,
            "unit": "ns",
            "range": "± 13530.529660010992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939035.325420673,
            "unit": "ns",
            "range": "± 8212.5041991301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626936.6665364583,
            "unit": "ns",
            "range": "± 3378.010660567395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569958.8503605769,
            "unit": "ns",
            "range": "± 2370.429740471469"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41939.92857142857,
            "unit": "ns",
            "range": "± 5038.8896221004225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2503139.3529411764,
            "unit": "ns",
            "range": "± 89446.48564853145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2591758.3698630137,
            "unit": "ns",
            "range": "± 124439.8238476586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3246273.6666666665,
            "unit": "ns",
            "range": "± 83624.26896056195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3067902.2258064514,
            "unit": "ns",
            "range": "± 135912.77483599656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7018629.5,
            "unit": "ns",
            "range": "± 164956.04006747503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6235708.642857143,
            "unit": "ns",
            "range": "± 70470.58006617114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15326829.5,
            "unit": "ns",
            "range": "± 424159.75034627557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38880106.71428572,
            "unit": "ns",
            "range": "± 133076.61738156623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76648646.14285715,
            "unit": "ns",
            "range": "± 364065.54214794625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153681937.15384614,
            "unit": "ns",
            "range": "± 1079547.3449359725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 959408.9742268041,
            "unit": "ns",
            "range": "± 70086.70190855466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1897340.1860465116,
            "unit": "ns",
            "range": "± 69031.84340034878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1422153.4505494505,
            "unit": "ns",
            "range": "± 86569.6412599274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6129457.21875,
            "unit": "ns",
            "range": "± 371100.79132933245"
          }
        ]
      }
    ]
  }
}
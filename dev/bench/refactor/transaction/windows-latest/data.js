window.BENCHMARK_DATA = {
  "lastUpdate": 1682501886266,
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
          "id": "be2728468029bd04f0280085ec779ebef5413c1a",
          "message": "Cleanup; renaming",
          "timestamp": "2023-04-26T18:22:11+09:00",
          "tree_id": "f33b659d8a09bd7e55f381b8a52753879e68356d",
          "url": "https://github.com/greymistcube/libplanet/commit/be2728468029bd04f0280085ec779ebef5413c1a"
        },
        "date": 1682501865255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309501.0416666667,
            "unit": "ns",
            "range": "± 112877.16565018496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2355204.0816326533,
            "unit": "ns",
            "range": "± 93475.33533679636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2015623,
            "unit": "ns",
            "range": "± 140965.58993763212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5075512,
            "unit": "ns",
            "range": "± 324317.46115823183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48956.09756097561,
            "unit": "ns",
            "range": "± 2626.789692596227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7080700,
            "unit": "ns",
            "range": "± 148448.71542425387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19656703.333333332,
            "unit": "ns",
            "range": "± 300917.1358807382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49342950,
            "unit": "ns",
            "range": "± 915568.8279242946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96958180,
            "unit": "ns",
            "range": "± 1746167.1378029243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191646784.21052632,
            "unit": "ns",
            "range": "± 4060437.2201994807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4751340.260416667,
            "unit": "ns",
            "range": "± 25176.704465483173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1494917.4479166667,
            "unit": "ns",
            "range": "± 11448.194472244943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153363.4486607143,
            "unit": "ns",
            "range": "± 6618.3451019517215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607444.5442708335,
            "unit": "ns",
            "range": "± 12884.99729940524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822664.5768229166,
            "unit": "ns",
            "range": "± 5131.441501459946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755941.2179129465,
            "unit": "ns",
            "range": "± 2808.5525948723816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3025110,
            "unit": "ns",
            "range": "± 88463.3972622147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3375383.3333333335,
            "unit": "ns",
            "range": "± 62315.12848494528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3855485.294117647,
            "unit": "ns",
            "range": "± 79166.52497407341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3975960.7843137253,
            "unit": "ns",
            "range": "± 160424.49698026964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6208053.333333333,
            "unit": "ns",
            "range": "± 184466.43790306052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260962.16216216216,
            "unit": "ns",
            "range": "± 8699.14910753892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240541.17647058822,
            "unit": "ns",
            "range": "± 9088.810185510274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205054.54545454544,
            "unit": "ns",
            "range": "± 4860.112410293886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3753900,
            "unit": "ns",
            "range": "± 58552.27930460697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3462571.4285714286,
            "unit": "ns",
            "range": "± 48233.33396619505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20586.458333333332,
            "unit": "ns",
            "range": "± 2302.7498340561474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82823.4693877551,
            "unit": "ns",
            "range": "± 6028.365954940201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74867.67676767676,
            "unit": "ns",
            "range": "± 5536.978257225268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97742.85714285714,
            "unit": "ns",
            "range": "± 20604.985133970225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6561.458333333333,
            "unit": "ns",
            "range": "± 1132.242283135239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20185.858585858587,
            "unit": "ns",
            "range": "± 3017.838464896049"
          }
        ]
      }
    ]
  }
}
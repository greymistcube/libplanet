window.BENCHMARK_DATA = {
  "lastUpdate": 1698742414384,
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
          "id": "4406a0ccc94406e81a1a0a30da9d595ec444d301",
          "message": "Fix build warnings",
          "timestamp": "2023-10-31T17:21:43+09:00",
          "tree_id": "7719f0f09854ffd982d342983918c97f915476f2",
          "url": "https://github.com/greymistcube/libplanet/commit/4406a0ccc94406e81a1a0a30da9d595ec444d301"
        },
        "date": 1698742385962,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1390176.7676767677,
            "unit": "ns",
            "range": "± 171720.88282328605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2648532,
            "unit": "ns",
            "range": "± 225289.98232805147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2145006,
            "unit": "ns",
            "range": "± 160540.57218401745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8970955.88235294,
            "unit": "ns",
            "range": "± 258553.7880751039"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53919.354838709674,
            "unit": "ns",
            "range": "± 4663.229382616173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7698454.285714285,
            "unit": "ns",
            "range": "± 247045.2879925616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21898885.714285713,
            "unit": "ns",
            "range": "± 282017.95048472425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55579464.28571428,
            "unit": "ns",
            "range": "± 555487.6729327302"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108762120,
            "unit": "ns",
            "range": "± 1969448.3757061083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217005188.2352941,
            "unit": "ns",
            "range": "± 3948987.258285716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4711927.120535715,
            "unit": "ns",
            "range": "± 17309.957787880874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1493405.1607572115,
            "unit": "ns",
            "range": "± 7732.441615672066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1105613.9423076923,
            "unit": "ns",
            "range": "± 3475.2524382917104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2697308.6458333335,
            "unit": "ns",
            "range": "± 26312.137297012694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848238.0208333334,
            "unit": "ns",
            "range": "± 2944.2406395743133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770941.4411272322,
            "unit": "ns",
            "range": "± 4149.753387450345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3162231.5789473685,
            "unit": "ns",
            "range": "± 106420.33908239775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3513831.25,
            "unit": "ns",
            "range": "± 107773.87449745671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4161670.2702702703,
            "unit": "ns",
            "range": "± 140393.31826626867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4248523.076923077,
            "unit": "ns",
            "range": "± 114336.13009960519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10359094.736842105,
            "unit": "ns",
            "range": "± 308931.57289002894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264747.7611940298,
            "unit": "ns",
            "range": "± 11844.60442575917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259507.35294117648,
            "unit": "ns",
            "range": "± 12295.470785769958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253196.9696969697,
            "unit": "ns",
            "range": "± 24607.612288889322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4284378.125,
            "unit": "ns",
            "range": "± 124212.5486735695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3787326.3157894737,
            "unit": "ns",
            "range": "± 73118.74544651675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25636.082474226805,
            "unit": "ns",
            "range": "± 3334.4222877624766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99514.58333333333,
            "unit": "ns",
            "range": "± 9398.465486917103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84036.73469387754,
            "unit": "ns",
            "range": "± 14296.812331289218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104126.31578947368,
            "unit": "ns",
            "range": "± 18410.93113393141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7063.636363636364,
            "unit": "ns",
            "range": "± 1523.4530156552553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25953.125,
            "unit": "ns",
            "range": "± 3331.001212690768"
          }
        ]
      }
    ]
  }
}
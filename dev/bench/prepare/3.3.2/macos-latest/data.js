window.BENCHMARK_DATA = {
  "lastUpdate": 1694144861780,
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
          "id": "3c1f78823463023c40ab0bbe7fd293285de5bd1e",
          "message": "Prepare 3.3.2",
          "timestamp": "2023-09-08T12:31:29+09:00",
          "tree_id": "7ade798411f9b01c80af1bba967751e414104264",
          "url": "https://github.com/greymistcube/libplanet/commit/3c1f78823463023c40ab0bbe7fd293285de5bd1e"
        },
        "date": 1694144834746,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8744752.5,
            "unit": "ns",
            "range": "± 74296.79344437002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20282279.29245283,
            "unit": "ns",
            "range": "± 836338.8848255269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49852875.92307692,
            "unit": "ns",
            "range": "± 566688.1348699743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104958589,
            "unit": "ns",
            "range": "± 1653835.4016976021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221440422.80769232,
            "unit": "ns",
            "range": "± 1107645.9914086107"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67798.44791666667,
            "unit": "ns",
            "range": "± 10566.243873641131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294681.4285714286,
            "unit": "ns",
            "range": "± 17931.726691440173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281312.7794117647,
            "unit": "ns",
            "range": "± 12386.383996261917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269596.7910447761,
            "unit": "ns",
            "range": "± 12547.95447960913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3882322.36,
            "unit": "ns",
            "range": "± 90076.45641707198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3739689.3846153845,
            "unit": "ns",
            "range": "± 101892.81591008345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18030.28125,
            "unit": "ns",
            "range": "± 1955.6413335090224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90150.9693877551,
            "unit": "ns",
            "range": "± 12228.676174403945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75897.46808510639,
            "unit": "ns",
            "range": "± 6810.114251409448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87481.28571428571,
            "unit": "ns",
            "range": "± 10844.684702369841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4862.18085106383,
            "unit": "ns",
            "range": "± 673.8518863894838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17414.14606741573,
            "unit": "ns",
            "range": "± 1439.7321448368114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1638985.9278350514,
            "unit": "ns",
            "range": "± 217190.0447766621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2846780.493333333,
            "unit": "ns",
            "range": "± 142885.39957246528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1926569.5714285714,
            "unit": "ns",
            "range": "± 146885.40401468315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5432102.323529412,
            "unit": "ns",
            "range": "± 260278.3560720721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3287943.612244898,
            "unit": "ns",
            "range": "± 238388.80084449207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3383761.5384615385,
            "unit": "ns",
            "range": "± 91736.7116124099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4476905.777777778,
            "unit": "ns",
            "range": "± 149392.91275408352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3905916.202898551,
            "unit": "ns",
            "range": "± 179315.81327191976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6542488.564102564,
            "unit": "ns",
            "range": "± 204063.34985099666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5625133.402864584,
            "unit": "ns",
            "range": "± 73512.62818730605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1713433.7024274555,
            "unit": "ns",
            "range": "± 5249.593772897143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 991945.1796875,
            "unit": "ns",
            "range": "± 5389.791004107363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2456354.6261160714,
            "unit": "ns",
            "range": "± 11245.602709751749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 765260.2557896206,
            "unit": "ns",
            "range": "± 6217.828783801802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753861.2000651042,
            "unit": "ns",
            "range": "± 3892.0485330742326"
          }
        ]
      }
    ]
  }
}
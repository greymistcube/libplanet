window.BENCHMARK_DATA = {
  "lastUpdate": 1684408108265,
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
          "id": "6a67d492bb5dfbf0b451a006e4c72ae2cb1c2c6c",
          "message": "Removed t from Context and ConsensusContext",
          "timestamp": "2023-05-18T19:53:46+09:00",
          "tree_id": "66139e90fd004f391d5a5c9cff75f998c5569cf7",
          "url": "https://github.com/greymistcube/libplanet/commit/6a67d492bb5dfbf0b451a006e4c72ae2cb1c2c6c"
        },
        "date": 1684408091870,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7610128.914285715,
            "unit": "ns",
            "range": "± 247687.75589918604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18923072.633333333,
            "unit": "ns",
            "range": "± 558603.3904160529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46432802.705882356,
            "unit": "ns",
            "range": "± 772804.7031610545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91326029.73076923,
            "unit": "ns",
            "range": "± 820220.5877495349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188415467.5,
            "unit": "ns",
            "range": "± 1271461.357667625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56156.57894736842,
            "unit": "ns",
            "range": "± 6217.140191539371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328362.89285714284,
            "unit": "ns",
            "range": "± 16524.460391472574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311278.4696969697,
            "unit": "ns",
            "range": "± 31077.550837382485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302006.9693877551,
            "unit": "ns",
            "range": "± 21734.15665476576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4138725.5555555555,
            "unit": "ns",
            "range": "± 87921.74787256746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3700984.6470588236,
            "unit": "ns",
            "range": "± 72216.41456928368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19996.15306122449,
            "unit": "ns",
            "range": "± 3362.5868519869464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116410.30927835051,
            "unit": "ns",
            "range": "± 10100.604449075503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106208.21,
            "unit": "ns",
            "range": "± 20792.286278151965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119618.02380952382,
            "unit": "ns",
            "range": "± 7424.94016117414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7622.711340206186,
            "unit": "ns",
            "range": "± 1354.051997391863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19756.76530612245,
            "unit": "ns",
            "range": "± 3052.799822914029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1507401.5416666667,
            "unit": "ns",
            "range": "± 150822.34878453013"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2786371.252873563,
            "unit": "ns",
            "range": "± 150947.26415595572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2425140.432989691,
            "unit": "ns",
            "range": "± 254517.19964232066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6093751.978723404,
            "unit": "ns",
            "range": "± 234690.83406412983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3086175.8775510206,
            "unit": "ns",
            "range": "± 121256.7609545671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3290494.5217391304,
            "unit": "ns",
            "range": "± 126022.31288567543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4383847.7,
            "unit": "ns",
            "range": "± 174458.55298424652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4159756.880952381,
            "unit": "ns",
            "range": "± 221892.1968109199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7443974.580645162,
            "unit": "ns",
            "range": "± 325573.03637808247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6926954.341517857,
            "unit": "ns",
            "range": "± 63547.187046441126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893381.383984375,
            "unit": "ns",
            "range": "± 8226.721204739755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296718.5482421876,
            "unit": "ns",
            "range": "± 15425.394170325964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612985.4070870536,
            "unit": "ns",
            "range": "± 29343.0243272185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 786357.7482421875,
            "unit": "ns",
            "range": "± 11876.28869676122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741125.2205078125,
            "unit": "ns",
            "range": "± 10347.396309163449"
          }
        ]
      }
    ]
  }
}
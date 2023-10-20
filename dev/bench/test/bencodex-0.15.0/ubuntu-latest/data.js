window.BENCHMARK_DATA = {
  "lastUpdate": 1697778185787,
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
          "id": "6880cdf68f5595977006ed5852809792278cd8f0",
          "message": "Bump bencodex to 0.15.0-candidate",
          "timestamp": "2023-10-20T13:49:05+09:00",
          "tree_id": "77d3950ad43afd4a67de5c8f20e49e88a5ca87e2",
          "url": "https://github.com/greymistcube/libplanet/commit/6880cdf68f5595977006ed5852809792278cd8f0"
        },
        "date": 1697778178000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5294827.783653846,
            "unit": "ns",
            "range": "± 7717.045733857823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1671974.3533854166,
            "unit": "ns",
            "range": "± 4891.480348319505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1125644.2248697917,
            "unit": "ns",
            "range": "± 1275.9491836240604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2597168.6302083335,
            "unit": "ns",
            "range": "± 10285.311049088672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820183.8814174107,
            "unit": "ns",
            "range": "± 1869.2133451054056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753402.5833333334,
            "unit": "ns",
            "range": "± 1350.446948501906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3606898.6428571427,
            "unit": "ns",
            "range": "± 48240.97829504121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3791172.3125,
            "unit": "ns",
            "range": "± 73016.26786017734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4435455.714285715,
            "unit": "ns",
            "range": "± 60876.515409258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4062370.6666666665,
            "unit": "ns",
            "range": "± 60441.76608068613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6343553.666666667,
            "unit": "ns",
            "range": "± 143976.76804482497"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50576.60810810811,
            "unit": "ns",
            "range": "± 2541.0589412579666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8435739.421052631,
            "unit": "ns",
            "range": "± 187111.47496028373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22497565.42857143,
            "unit": "ns",
            "range": "± 293414.64346177777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56568268.428571425,
            "unit": "ns",
            "range": "± 481885.8683998676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113414661.86666666,
            "unit": "ns",
            "range": "± 974531.7686035446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226829502.46666667,
            "unit": "ns",
            "range": "± 1874828.9964659202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280157.65789473685,
            "unit": "ns",
            "range": "± 9642.962201260358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269541.9411764706,
            "unit": "ns",
            "range": "± 10489.674752654184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241584.15555555557,
            "unit": "ns",
            "range": "± 9148.361609290672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4485597.533333333,
            "unit": "ns",
            "range": "± 56669.15922120334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4174845.933333333,
            "unit": "ns",
            "range": "± 58141.29589256389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20504.847826086956,
            "unit": "ns",
            "range": "± 1667.4593553857178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88969.38888888889,
            "unit": "ns",
            "range": "± 5803.537976899382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72554.75342465754,
            "unit": "ns",
            "range": "± 3593.4796189333674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87932.54639175258,
            "unit": "ns",
            "range": "± 13712.63724028908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5627.797872340426,
            "unit": "ns",
            "range": "± 791.5737500169234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21486.36559139785,
            "unit": "ns",
            "range": "± 2019.2910496387103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410241.6630434783,
            "unit": "ns",
            "range": "± 99480.81804060555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2703163.964912281,
            "unit": "ns",
            "range": "± 115408.5018725355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1756881.2608695652,
            "unit": "ns",
            "range": "± 96239.5498378195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4688323.723076923,
            "unit": "ns",
            "range": "± 218241.85434573697"
          }
        ]
      }
    ]
  }
}
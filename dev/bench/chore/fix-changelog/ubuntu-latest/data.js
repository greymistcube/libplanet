window.BENCHMARK_DATA = {
  "lastUpdate": 1706252509969,
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
          "id": "db7cb09ecce1660e1709f3dfb4d7ca72e1d69fd1",
          "message": "Changelog",
          "timestamp": "2024-01-26T15:50:37+09:00",
          "tree_id": "f4c0a18daa555aea8fd3e2452632ee0bd7a5d7b3",
          "url": "https://github.com/greymistcube/libplanet/commit/db7cb09ecce1660e1709f3dfb4d7ca72e1d69fd1"
        },
        "date": 1706252503655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2441607.361111111,
            "unit": "ns",
            "range": "± 80853.82202050202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2507813.4743589745,
            "unit": "ns",
            "range": "± 65829.44926714117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3146308.730769231,
            "unit": "ns",
            "range": "± 68312.23947174192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3211245.9696969697,
            "unit": "ns",
            "range": "± 92317.42565818928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13841815.097938145,
            "unit": "ns",
            "range": "± 985853.1091523141"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38306.084210526315,
            "unit": "ns",
            "range": "± 4429.87820701691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991162.7040816327,
            "unit": "ns",
            "range": "± 82863.01677625577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1866993.512195122,
            "unit": "ns",
            "range": "± 66828.26292749272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1608450.7311827957,
            "unit": "ns",
            "range": "± 156127.38050485376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12772611.732558139,
            "unit": "ns",
            "range": "± 1001121.5066714216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5459658.576923077,
            "unit": "ns",
            "range": "± 13152.798621469237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14199101.153846154,
            "unit": "ns",
            "range": "± 168270.8272294231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36008173.21428572,
            "unit": "ns",
            "range": "± 173914.2154556836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75741802.28571428,
            "unit": "ns",
            "range": "± 313382.7120405848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147176260.08333334,
            "unit": "ns",
            "range": "± 547313.4588133798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3766996.836495536,
            "unit": "ns",
            "range": "± 42235.335990582644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200883.1533203125,
            "unit": "ns",
            "range": "± 1729.743267989663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775318.7276041667,
            "unit": "ns",
            "range": "± 13287.607932144305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956374.2572544643,
            "unit": "ns",
            "range": "± 2861.517451405257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632268.8851143973,
            "unit": "ns",
            "range": "± 1983.5267497607674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566762.1621791294,
            "unit": "ns",
            "range": "± 764.016185515352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196979.07936507938,
            "unit": "ns",
            "range": "± 8551.51321320005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192612.85294117648,
            "unit": "ns",
            "range": "± 9199.049366467581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172274.25,
            "unit": "ns",
            "range": "± 2014.2869762591608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3209631.153846154,
            "unit": "ns",
            "range": "± 42329.1201830886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2832090.285714286,
            "unit": "ns",
            "range": "± 39171.41982350156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16171.010638297872,
            "unit": "ns",
            "range": "± 1660.8595876166305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59957.0376344086,
            "unit": "ns",
            "range": "± 3768.2166222438977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69001.75,
            "unit": "ns",
            "range": "± 19596.196780242844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65892.82105263158,
            "unit": "ns",
            "range": "± 16802.74854857937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2989.105882352941,
            "unit": "ns",
            "range": "± 438.9087936367335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14777.30612244898,
            "unit": "ns",
            "range": "± 1686.2438060269315"
          }
        ]
      }
    ]
  }
}
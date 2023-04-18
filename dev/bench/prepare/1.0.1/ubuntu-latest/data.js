window.BENCHMARK_DATA = {
  "lastUpdate": 1681801275007,
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
          "id": "ec6d776019167e45410d53ad191a92d77cef6a3f",
          "message": "Prepare 1.0.1",
          "timestamp": "2023-04-18T15:47:46+09:00",
          "tree_id": "13c2e25096d4f2be554b279a8e7f29bb999bbc3c",
          "url": "https://github.com/greymistcube/libplanet/commit/ec6d776019167e45410d53ad191a92d77cef6a3f"
        },
        "date": 1681801268007,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7584539.384615385,
            "unit": "ns",
            "range": "± 56307.409101790596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21461794.733333334,
            "unit": "ns",
            "range": "± 321560.89124778006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53973730.46666667,
            "unit": "ns",
            "range": "± 854121.7012150859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107113997.46666667,
            "unit": "ns",
            "range": "± 1892365.6771707304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214062654.66666666,
            "unit": "ns",
            "range": "± 3169008.850861545"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47840.9156626506,
            "unit": "ns",
            "range": "± 2127.574974774867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1416478.7684210527,
            "unit": "ns",
            "range": "± 102782.52220591606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2637479,
            "unit": "ns",
            "range": "± 65072.72288894801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2279079.211764706,
            "unit": "ns",
            "range": "± 122352.12794431586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5934754.454545454,
            "unit": "ns",
            "range": "± 389019.1532437643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5926118.398995535,
            "unit": "ns",
            "range": "± 23573.950309295597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847804.723828125,
            "unit": "ns",
            "range": "± 4260.828443895286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344234.0290364583,
            "unit": "ns",
            "range": "± 4535.61133025322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631620.5100446427,
            "unit": "ns",
            "range": "± 5475.020314220845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827403.2567661831,
            "unit": "ns",
            "range": "± 1202.9875869332202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751939.2863932292,
            "unit": "ns",
            "range": "± 1181.8508083612278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333446.28571428574,
            "unit": "ns",
            "range": "± 11302.200783498878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278280.6842105263,
            "unit": "ns",
            "range": "± 9535.310037917143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234820.2857142857,
            "unit": "ns",
            "range": "± 3134.8799861354387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5789195.2,
            "unit": "ns",
            "range": "± 91439.73038892886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4112446.4285714286,
            "unit": "ns",
            "range": "± 42751.090868158935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20087.072164948455,
            "unit": "ns",
            "range": "± 1261.81513806684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88230.17777777778,
            "unit": "ns",
            "range": "± 4914.695433492802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75956.2,
            "unit": "ns",
            "range": "± 2438.637430543347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 185022.39583333334,
            "unit": "ns",
            "range": "± 14733.101936208795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6058.876288659794,
            "unit": "ns",
            "range": "± 726.2243147743097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18118.627659574468,
            "unit": "ns",
            "range": "± 1373.282050801902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361453.525,
            "unit": "ns",
            "range": "± 118595.20716285023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3503346.0303030303,
            "unit": "ns",
            "range": "± 110102.9182465447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4197223.222222222,
            "unit": "ns",
            "range": "± 88546.36751479623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4731184.866666666,
            "unit": "ns",
            "range": "± 85093.47827021651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7387263.833333333,
            "unit": "ns",
            "range": "± 243670.4709502452"
          }
        ]
      }
    ]
  }
}
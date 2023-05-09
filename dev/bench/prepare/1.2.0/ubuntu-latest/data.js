window.BENCHMARK_DATA = {
  "lastUpdate": 1683611623226,
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
          "id": "7e215976c22135f841b0c847f070f41df932dda6",
          "message": "Prepare 1.2.0",
          "timestamp": "2023-05-09T14:40:28+09:00",
          "tree_id": "6e83753f227a51959e4e13e4c26d550555ed1a33",
          "url": "https://github.com/greymistcube/libplanet/commit/7e215976c22135f841b0c847f070f41df932dda6"
        },
        "date": 1683611615017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280025.07692307694,
            "unit": "ns",
            "range": "± 9306.625982499654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260616.76315789475,
            "unit": "ns",
            "range": "± 5473.807496611232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246446.4,
            "unit": "ns",
            "range": "± 6390.540685262867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4201838.866666666,
            "unit": "ns",
            "range": "± 20129.385654760932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3763448.6,
            "unit": "ns",
            "range": "± 25142.162581153254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18331.463157894737,
            "unit": "ns",
            "range": "± 1254.4455739872913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83144.59677419355,
            "unit": "ns",
            "range": "± 3769.4007979687076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73060.39024390244,
            "unit": "ns",
            "range": "± 2628.0472682017044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84707.94680851063,
            "unit": "ns",
            "range": "± 8130.587552162317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4712.61052631579,
            "unit": "ns",
            "range": "± 541.5373564202716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16937.08510638298,
            "unit": "ns",
            "range": "± 1284.9849809554862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3203560.772727273,
            "unit": "ns",
            "range": "± 77956.6135438912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3379024.466666667,
            "unit": "ns",
            "range": "± 48813.13831902617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4178692.533333333,
            "unit": "ns",
            "range": "± 55749.1195854462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4173272.393939394,
            "unit": "ns",
            "range": "± 119684.2031172398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6730100.296296297,
            "unit": "ns",
            "range": "± 186747.10481347903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5991613.643629808,
            "unit": "ns",
            "range": "± 24015.826339435956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1845295.1861049107,
            "unit": "ns",
            "range": "± 1230.0155422918813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363673.563671875,
            "unit": "ns",
            "range": "± 389.6984512472287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565675.5041852677,
            "unit": "ns",
            "range": "± 1723.040010105302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816304.3109654018,
            "unit": "ns",
            "range": "± 2380.07682979021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729575.969140625,
            "unit": "ns",
            "range": "± 515.5883261726254"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44209.21276595745,
            "unit": "ns",
            "range": "± 2756.9725014222972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7535636.071428572,
            "unit": "ns",
            "range": "± 32870.32785042622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19387326.307692308,
            "unit": "ns",
            "range": "± 61608.430204240474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49483794.6,
            "unit": "ns",
            "range": "± 381408.7985094208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98960022.6,
            "unit": "ns",
            "range": "± 704464.8600411724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196283545.35714287,
            "unit": "ns",
            "range": "± 1210483.5154096072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356731.32,
            "unit": "ns",
            "range": "± 93215.08163044923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2540829.9,
            "unit": "ns",
            "range": "± 68849.2466146395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2109338.3666666667,
            "unit": "ns",
            "range": "± 108334.7135206699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5169107.352941177,
            "unit": "ns",
            "range": "± 166220.25164747657"
          }
        ]
      }
    ]
  }
}
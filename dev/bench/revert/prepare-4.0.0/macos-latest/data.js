window.BENCHMARK_DATA = {
  "lastUpdate": 1698979806652,
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
          "id": "4ade6dbac3bf64011bcd13a7cd86928c743ee200",
          "message": "Revert \"Prepare 4.0.0\"\n\nThis reverts commit b99343a7dadaeb286c126889b58fd81343c0e4f9.",
          "timestamp": "2023-11-03T11:27:55+09:00",
          "tree_id": "39a47ae5000d9be0970651f9bcb0ced593447231",
          "url": "https://github.com/greymistcube/libplanet/commit/4ade6dbac3bf64011bcd13a7cd86928c743ee200"
        },
        "date": 1698979792763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13238005.819148935,
            "unit": "ns",
            "range": "± 3392452.325704617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 34552865.255813956,
            "unit": "ns",
            "range": "± 5712131.587109447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67819697.82,
            "unit": "ns",
            "range": "± 10058183.75986855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109083377.31034483,
            "unit": "ns",
            "range": "± 4260490.018006513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223421124.06976745,
            "unit": "ns",
            "range": "± 16342288.620332435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79348.75531914894,
            "unit": "ns",
            "range": "± 18369.388916198095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 243978.67368421052,
            "unit": "ns",
            "range": "± 26412.807690484417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228208.84536082475,
            "unit": "ns",
            "range": "± 23667.153449075526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219192.72631578948,
            "unit": "ns",
            "range": "± 23158.473589339384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4193429.649253731,
            "unit": "ns",
            "range": "± 199154.6184982651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3877275.9285714286,
            "unit": "ns",
            "range": "± 64759.653577331956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27015.632653061224,
            "unit": "ns",
            "range": "± 6106.973927341762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121581.17346938775,
            "unit": "ns",
            "range": "± 24711.578488583713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112367.80412371134,
            "unit": "ns",
            "range": "± 23830.94047252401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83860.81914893616,
            "unit": "ns",
            "range": "± 21220.439618855187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7430.395833333333,
            "unit": "ns",
            "range": "± 1611.5650286807127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16455.875,
            "unit": "ns",
            "range": "± 3465.7875090511156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1738154.7040816327,
            "unit": "ns",
            "range": "± 437776.08096327755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3904433.5721649486,
            "unit": "ns",
            "range": "± 908701.5463689482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2845714.6063829786,
            "unit": "ns",
            "range": "± 670059.0274895338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15511269.105263159,
            "unit": "ns",
            "range": "± 4607206.107308327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3220832.8695652173,
            "unit": "ns",
            "range": "± 201705.24604673526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2994749.1666666665,
            "unit": "ns",
            "range": "± 159643.60000806078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3809508.8780487804,
            "unit": "ns",
            "range": "± 201294.85665159498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4018228.35483871,
            "unit": "ns",
            "range": "± 182492.62895440927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16680945.292929294,
            "unit": "ns",
            "range": "± 3958460.560463778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5216572.29978391,
            "unit": "ns",
            "range": "± 354100.75470171566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1563595.9441675646,
            "unit": "ns",
            "range": "± 68164.64117732304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162690.8567525456,
            "unit": "ns",
            "range": "± 166321.90203212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2299213.17921875,
            "unit": "ns",
            "range": "± 256007.17050186548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635481.6704282408,
            "unit": "ns",
            "range": "± 17516.3524231846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573654.8129185268,
            "unit": "ns",
            "range": "± 3500.58603018336"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1690963980310,
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
          "id": "9378f081b0be228a89dd695049564cd1e9fa248f",
          "message": "Fix tests; update to new API",
          "timestamp": "2023-08-02T16:53:42+09:00",
          "tree_id": "0ad558a6ae1dac5b762861ec861e86be87aee7bd",
          "url": "https://github.com/greymistcube/libplanet/commit/9378f081b0be228a89dd695049564cd1e9fa248f"
        },
        "date": 1690963634512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292567.9682539682,
            "unit": "ns",
            "range": "± 13412.89034181509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284570.51612903224,
            "unit": "ns",
            "range": "± 8643.260757649927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256131.79411764705,
            "unit": "ns",
            "range": "± 7419.204873591778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4336861.533333333,
            "unit": "ns",
            "range": "± 24229.261948156425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3973074,
            "unit": "ns",
            "range": "± 34214.929107717784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22018.157894736843,
            "unit": "ns",
            "range": "± 1622.7613143388248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97805.609375,
            "unit": "ns",
            "range": "± 4373.2005736861065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76385.09375,
            "unit": "ns",
            "range": "± 2329.705178071653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114076.25,
            "unit": "ns",
            "range": "± 1704.3807793181343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5239.010526315789,
            "unit": "ns",
            "range": "± 576.0285249795755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20073.96875,
            "unit": "ns",
            "range": "± 2024.379205444032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1439252.5959595959,
            "unit": "ns",
            "range": "± 109911.0703276507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2653782.3636363638,
            "unit": "ns",
            "range": "± 76407.9388532444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1825818.6923076923,
            "unit": "ns",
            "range": "± 101734.42390914934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4856082.268292683,
            "unit": "ns",
            "range": "± 172893.10010610957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6187069.829799107,
            "unit": "ns",
            "range": "± 16699.472007338507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2009050.4126674107,
            "unit": "ns",
            "range": "± 935.6816016948011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361604.87421875,
            "unit": "ns",
            "range": "± 786.8169376674322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619483.027644231,
            "unit": "ns",
            "range": "± 4230.947003972797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809715.5784505209,
            "unit": "ns",
            "range": "± 460.79237475417875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737832.1149338942,
            "unit": "ns",
            "range": "± 535.8969935137123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3429773.933333333,
            "unit": "ns",
            "range": "± 56513.52763904872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3593828.8666666667,
            "unit": "ns",
            "range": "± 47676.58668101546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4419714.5,
            "unit": "ns",
            "range": "± 91958.43281053995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3940264.1315789474,
            "unit": "ns",
            "range": "± 127585.54738115829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6465605.704545454,
            "unit": "ns",
            "range": "± 241142.1569259732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7768574.428571428,
            "unit": "ns",
            "range": "± 40972.87977658897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19809310.2,
            "unit": "ns",
            "range": "± 75821.84584010072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51311114.266666666,
            "unit": "ns",
            "range": "± 213707.7068512928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101995849.13333334,
            "unit": "ns",
            "range": "± 219418.67553536833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202585637.46666667,
            "unit": "ns",
            "range": "± 396540.999822909"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51694.021505376346,
            "unit": "ns",
            "range": "± 4945.735448845528"
          }
        ]
      },
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
          "id": "572df674c2a42409a261c5439b847ead10d2496e",
          "message": "Fix tests; update to new API",
          "timestamp": "2023-08-02T16:56:57+09:00",
          "tree_id": "0ad558a6ae1dac5b762861ec861e86be87aee7bd",
          "url": "https://github.com/greymistcube/libplanet/commit/572df674c2a42409a261c5439b847ead10d2496e"
        },
        "date": 1690963971289,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343692.9,
            "unit": "ns",
            "range": "± 11193.346837547786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327680.9375,
            "unit": "ns",
            "range": "± 9445.77534834762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293320.7878787879,
            "unit": "ns",
            "range": "± 8967.671401197107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5325382.666666667,
            "unit": "ns",
            "range": "± 91475.0915992722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4896728.333333333,
            "unit": "ns",
            "range": "± 75070.99587025857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24001.273684210526,
            "unit": "ns",
            "range": "± 2018.9033964754508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108662.67021276595,
            "unit": "ns",
            "range": "± 7224.693021552011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99801.97959183673,
            "unit": "ns",
            "range": "± 8473.988044658932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115622.36170212766,
            "unit": "ns",
            "range": "± 13646.626396963551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7057.978947368421,
            "unit": "ns",
            "range": "± 758.95687062373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24743.389473684212,
            "unit": "ns",
            "range": "± 1962.528684136421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1743240.3958333333,
            "unit": "ns",
            "range": "± 104126.22200695494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3319045.923076923,
            "unit": "ns",
            "range": "± 115551.93024359326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198280.5888888887,
            "unit": "ns",
            "range": "± 120674.51187545633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5881374.8,
            "unit": "ns",
            "range": "± 170657.8469516287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7304914.553125,
            "unit": "ns",
            "range": "± 31576.170779345084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2324062.823958333,
            "unit": "ns",
            "range": "± 5554.008183818214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1629419.5341145834,
            "unit": "ns",
            "range": "± 6428.763146726687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3102067.94140625,
            "unit": "ns",
            "range": "± 9858.1165253111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997022.792578125,
            "unit": "ns",
            "range": "± 3028.5379917730397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913222.3110677083,
            "unit": "ns",
            "range": "± 1403.429104418287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4253658.48,
            "unit": "ns",
            "range": "± 113082.7756645989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4525923.806451613,
            "unit": "ns",
            "range": "± 136054.39304959844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5393378,
            "unit": "ns",
            "range": "± 89638.56148523836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4900024,
            "unit": "ns",
            "range": "± 123712.8023834446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7778584.291666667,
            "unit": "ns",
            "range": "± 194835.98728528817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10057060.214285715,
            "unit": "ns",
            "range": "± 127493.53792805379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26658237.4,
            "unit": "ns",
            "range": "± 245082.04028936924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66856178.53333333,
            "unit": "ns",
            "range": "± 701792.1315557424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131880500.4,
            "unit": "ns",
            "range": "± 1200657.1404069166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265804263.07692307,
            "unit": "ns",
            "range": "± 1295230.5528949574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58952.42857142857,
            "unit": "ns",
            "range": "± 3011.841508850705"
          }
        ]
      }
    ]
  }
}
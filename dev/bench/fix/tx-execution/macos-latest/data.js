window.BENCHMARK_DATA = {
  "lastUpdate": 1688725635827,
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
          "id": "2687fe01d517c7a827a8b221a83126684a56abb3",
          "message": "[skip changelog] Align with changed spec",
          "timestamp": "2023-07-07T19:12:16+09:00",
          "tree_id": "850c7723dcc2192085bf7c27cb7c000e2d820f0b",
          "url": "https://github.com/greymistcube/libplanet/commit/2687fe01d517c7a827a8b221a83126684a56abb3"
        },
        "date": 1688725609127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7859055.5,
            "unit": "ns",
            "range": "± 111367.36460022748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19214999.352941178,
            "unit": "ns",
            "range": "± 388767.49221625726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46441555.916666664,
            "unit": "ns",
            "range": "± 471892.2854588088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92442655.35,
            "unit": "ns",
            "range": "± 1823556.6563935687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191561079.86666667,
            "unit": "ns",
            "range": "± 2896664.7417822466"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53600.56842105263,
            "unit": "ns",
            "range": "± 6528.710179631998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298479.95604395604,
            "unit": "ns",
            "range": "± 21157.950737206247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288795.63636363635,
            "unit": "ns",
            "range": "± 21704.210632423226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272223.57303370786,
            "unit": "ns",
            "range": "± 16129.697198087504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4193002.5,
            "unit": "ns",
            "range": "± 81221.58439725243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3566011.653846154,
            "unit": "ns",
            "range": "± 94731.40183991464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15631.719512195123,
            "unit": "ns",
            "range": "± 1184.0432953627947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84155.94736842105,
            "unit": "ns",
            "range": "± 7123.109808802915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82173.57608695653,
            "unit": "ns",
            "range": "± 7090.9385625207515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96847.54166666667,
            "unit": "ns",
            "range": "± 12515.144001877057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4668.235294117647,
            "unit": "ns",
            "range": "± 498.7002546395891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15416.623529411765,
            "unit": "ns",
            "range": "± 1871.7894479708484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1472411.4787234042,
            "unit": "ns",
            "range": "± 146483.16225107518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2815163.336956522,
            "unit": "ns",
            "range": "± 188736.42283850306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2033609.435483871,
            "unit": "ns",
            "range": "± 212440.3586985117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6055287.409638554,
            "unit": "ns",
            "range": "± 320722.06099811546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3072335.5263157897,
            "unit": "ns",
            "range": "± 130765.70831850173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3472914,
            "unit": "ns",
            "range": "± 66049.48348927492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4146857.745098039,
            "unit": "ns",
            "range": "± 157410.846560692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3627495.619047619,
            "unit": "ns",
            "range": "± 183951.909120973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6977648.4655172415,
            "unit": "ns",
            "range": "± 262488.92245498236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6134004.1515625,
            "unit": "ns",
            "range": "± 40657.85324627271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1816514.547265625,
            "unit": "ns",
            "range": "± 15298.554676852717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1219027.1919270833,
            "unit": "ns",
            "range": "± 10162.361684465466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2416616.3953683036,
            "unit": "ns",
            "range": "± 17289.63226517638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 759625.479296875,
            "unit": "ns",
            "range": "± 7310.53819408753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790139.877328726,
            "unit": "ns",
            "range": "± 3440.849224307768"
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
          "id": "c6666c552fccd7852bb136bc2ab2f9583e6e8c94",
          "message": "Align with changed spec",
          "timestamp": "2023-07-07T19:08:19+09:00",
          "tree_id": "850c7723dcc2192085bf7c27cb7c000e2d820f0b",
          "url": "https://github.com/greymistcube/libplanet/commit/c6666c552fccd7852bb136bc2ab2f9583e6e8c94"
        },
        "date": 1688725610873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8495626.470588235,
            "unit": "ns",
            "range": "± 273210.308212538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22564667.714285713,
            "unit": "ns",
            "range": "± 1207361.4577131832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52711548.75,
            "unit": "ns",
            "range": "± 1834549.6610558277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103396013.92857143,
            "unit": "ns",
            "range": "± 1686993.7002148442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217952756.51333332,
            "unit": "ns",
            "range": "± 11015556.033464452"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64262.604395604394,
            "unit": "ns",
            "range": "± 7563.586146618137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345518.3548387097,
            "unit": "ns",
            "range": "± 33593.78012035702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323520.05555555556,
            "unit": "ns",
            "range": "± 25604.356047650494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325309.87234042556,
            "unit": "ns",
            "range": "± 35147.232997129315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4227403.5,
            "unit": "ns",
            "range": "± 169831.53047403495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3993265.125,
            "unit": "ns",
            "range": "± 153170.33956428824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22866.591836734693,
            "unit": "ns",
            "range": "± 5882.072914358473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93042.98979591837,
            "unit": "ns",
            "range": "± 16012.362846492388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95705.60606060606,
            "unit": "ns",
            "range": "± 18688.406404374477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107532.51098901099,
            "unit": "ns",
            "range": "± 15914.761977830174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6823.595744680851,
            "unit": "ns",
            "range": "± 1919.187468467185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18833.947916666668,
            "unit": "ns",
            "range": "± 3971.1400388030997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1774651.0555555555,
            "unit": "ns",
            "range": "± 190133.25925841383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3032537.694736842,
            "unit": "ns",
            "range": "± 186816.15043463008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2127476.787234043,
            "unit": "ns",
            "range": "± 221303.80501622322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6178066.177419355,
            "unit": "ns",
            "range": "± 278878.37261258136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3404870.35,
            "unit": "ns",
            "range": "± 147743.73550146303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3580861.3513513515,
            "unit": "ns",
            "range": "± 179538.37660852395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4583988.162790698,
            "unit": "ns",
            "range": "± 248987.54813386625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4047742.2816091953,
            "unit": "ns",
            "range": "± 221617.711964924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7781944.073170732,
            "unit": "ns",
            "range": "± 412272.11459474254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7120225.196180556,
            "unit": "ns",
            "range": "± 235575.4318327323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925320.0102539062,
            "unit": "ns",
            "range": "± 30968.712272924433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1271490.673828125,
            "unit": "ns",
            "range": "± 14937.068633645304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2427012.1037946427,
            "unit": "ns",
            "range": "± 13896.900138776702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852796.1807338169,
            "unit": "ns",
            "range": "± 9039.408965211724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735475.0574079241,
            "unit": "ns",
            "range": "± 11429.965579316138"
          }
        ]
      }
    ]
  }
}